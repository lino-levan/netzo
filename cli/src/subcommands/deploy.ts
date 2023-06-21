import type { DenoProjectDeploymentRequestPush, Manifest } from '../../deps.ts'
import { fromFileUrl, normalize, Spinner, wait } from '../../deps.ts'
import { error } from '../console.ts'
import { APIError, DenoAPI } from '../utils/api.deno.ts'
import { NetzoAPI } from '../utils/api.netzo.ts'
import { parseEntrypoint } from '../utils/entrypoint.ts'
import { walk } from '../utils/walk.ts'

const help = `netzo deploy
Deploy a project with static files to Netzo.

To deploy a local project
  netzo deploy --project=my-project main.ts

To deploy a local project and mark it as production:
  netzo deploy --project=my-project --prod main.ts

To deploy a local project without static files:
  netzo deploy --project=my-project --no-static main.ts

To ignore the node_modules directory while deploying:
  netzo deploy --project=my-project --exclude=node_modules main.tsx

USAGE:
    netzo deploy [OPTIONS] <entrypoint>

OPTIONS:
        --api-key=<API_KEY>       The API key to use (defaults to NETZO_API_KEY environment variable)
        --exclude=<PATTERNS>      Exclude files that match this pattern
        --include=<PATTERNS>      Only upload files that match this pattern
        --import-map=<FILE>       Use import map file
    -h, --help                    Prints help information
        --no-static               Don't include the files in the CWD as static files
        --prod                    Create a production deployment (default is preview deployment)
    -p, --project=<PROJECT_UID>   The UID of the project to deploy to
        --dry-run                 Dry run the deployment process

ARGS:
    <entrypoint>                  The file path to the entrypoint file (e.g. main.tsx)
`

export interface Args {
  help: boolean
  static: boolean
  prod: boolean
  exclude?: string[]
  include?: string[]
  token: string | null // FIXME(deno): remove token and use env var
  apiKey: string | null
  project: string | null
  importMap: string | null
  dryRun: boolean
}

// deno-lint-ignore no-explicit-any
export default async function (rawArgs: Record<string, any>): Promise<void> {
  const args: Args = {
    help: !!rawArgs.help,
    static: !rawArgs['no-static'], // negate the flag
    prod: !!rawArgs.prod,
    token: rawArgs.token ? String(rawArgs.token) : null, // FIXME(deno): remove token and use env var
    apiKey: rawArgs['api-key'] ? String(rawArgs['api-key']) : null,
    project: rawArgs.project ? String(rawArgs.project) : null,
    importMap: rawArgs['import-map'] ? String(rawArgs['import-map']) : null,
    exclude: rawArgs.exclude?.split(','),
    include: rawArgs.include?.split(','),
    dryRun: !!rawArgs['dry-run'],
  }
  const entrypoint = typeof rawArgs._[0] === 'string' ? rawArgs._[0] : null
  if (args.help) {
    console.log(help)
    Deno.exit(0)
  }
  const token = args.token ?? Deno.env.get('DENO_TOKEN') ?? null // FIXME(deno): remove token and use env var
  const apiKey = args.apiKey ?? Deno.env.get('NETZO_API_KEY') ?? null
  if (apiKey === null) {
    console.error(help)
    error('Missing API key. Set via --api-key or NETZO_API_KEY.')
  }
  if (entrypoint === null) {
    console.error(help)
    error('No entrypoint specifier given.')
  }
  if (rawArgs._.length > 1) {
    console.error(help)
    error('Too many positional arguments given.')
  }
  if (args.project === null) {
    console.error(help)
    error('Missing project UID.')
  }

  const opts = {
    entrypoint: await parseEntrypoint(entrypoint).catch((e) => error(e)),
    importMapUrl: args.importMap === null
      ? null
      : await parseEntrypoint(args.importMap, undefined, 'import map')
        .catch((e) => error(e)),
    static: args.static,
    prod: args.prod,
    token,
    apiKey,
    project: args.project,
    include: args.include?.map((pattern) => normalize(pattern)),
    exclude: args.exclude?.map((pattern) => normalize(pattern)),
    dryRun: args.dryRun,
  }

  await deploy(opts)
}

interface DeployOpts {
  entrypoint: URL
  importMapUrl: URL | null
  static: boolean
  prod: boolean
  exclude?: string[]
  include?: string[]
  token: string // FIXME(deno): remove token and use env var
  apiKey: string
  project: string
  dryRun: boolean
}

async function deploy(opts: DeployOpts): Promise<void> {
  if (opts.dryRun) {
    wait('').start().info('Performing dry run of deployment')
  }
  const projectSpinner = wait('Fetching project information...').start()
  const denoApi = DenoAPI.fromToken(opts.token)
  const netzoApi = NetzoAPI.fromApiKey(opts.apiKey)
  const project = (await netzoApi.getProjectByUid(opts.project))!
  if (!project) {
    projectSpinner.fail(
      'Project not found. Check your API key and project UID.',
    )
    Deno.exit(1)
  }

  const {
    entrypoint,
    importMap,
    // envVars = {},
    // permissions = { net: true },
  } = project.configuration ?? {}

  const deploymentsListing = await denoApi.getDeployments(project.uid)
  if (deploymentsListing === null) {
    projectSpinner.fail('Project deployments details not found.')
    Deno.exit(1)
  }
  const [projectDeployments, _pagination] = deploymentsListing!
  projectSpinner.succeed(`Project: ${project.uid}`)

  if (projectDeployments.length === 0) {
    wait('').start().info(
      'Empty project detected, automatically pushing initial deployment to production (use --prod for further updates).',
    )
    opts.prod = true
  }

  let url = opts.entrypoint ?? entrypoint
  const cwd = Deno.cwd()

  if (['http:', 'https:'].includes(url.protocol)) {
    // TODO: support remote entrypoints like deployctl. Note that this
    // might not apply to netzo though, since deno deploy only really
    // uses remote deployments to deploy single-file playground projects,
    // and `netzo deploy` is really meant to deploy from local -> remote.
    projectSpinner.fail('Remote entrypoints (http/https) are not supported.')
    Deno.exit(1)
  } else if (url.protocol === 'file:') {
    const path = fromFileUrl(url)
    if (!path.startsWith(cwd)) {
      error('Entrypoint must be in the current working directory.')
    }
    const entrypoint = path.slice(cwd.length)
    url = new URL(`file:///src${entrypoint}`)
  }

  let importMapUrl = opts.importMapUrl ?? importMap
  if (importMapUrl && importMapUrl.protocol === 'file:') {
    const path = fromFileUrl(importMapUrl)
    if (!path.startsWith(cwd)) {
      error('Import map must be in the current working directory.')
    }
    const entrypoint = path.slice(cwd.length)
    importMapUrl = new URL(`file:///src${entrypoint}`)
  }

  let uploadSpinner: Spinner | null = null
  const files: Uint8Array[] = []
  let manifest: Manifest | undefined = undefined

  if (opts.static) {
    wait('').start().info(`Uploading all files from the current dir (${cwd})`)
    const assetSpinner = wait('Finding static assets...').start()
    const assets = new Map<string, string>() // map of gitSha1 -> path
    const entries = await walk(cwd, cwd, assets, {
      include: opts.include,
      exclude: opts.exclude,
    })
    assetSpinner.succeed(
      `Found ${assets.size} asset${assets.size === 1 ? '' : 's'}.`,
    )

    uploadSpinner = wait('Determining assets to upload...').start()
    const neededHashes = await denoApi.projectNegotiateAssets(project.uid, {
      entries,
    })

    for (const hash of neededHashes) {
      const path = assets.get(hash)
      if (path === undefined) {
        error(`Asset ${hash} not found.`)
      }
      const data = await Deno.readFile(path)
      files.push(data) // equivalent to files.push(new TextDecoder().decode(contents))
    }
    if (files.length === 0) {
      uploadSpinner.succeed('No new assets to upload.')
      uploadSpinner = null
    } else {
      uploadSpinner.text = `${files.length} new asset${
        files.length === 1 ? '' : 's'
      } to upload.`
    }

    manifest = { entries }
  }

  if (opts.dryRun) {
    uploadSpinner?.succeed(uploadSpinner?.text)
    return
  }

  let deploySpinner: Spinner | null = null
  const req: DenoProjectDeploymentRequestPush = {
    url: url.href,
    importMapUrl: importMapUrl ? importMapUrl.href : null,
    production: opts.prod,
    manifest,
  }
  const progress = denoApi.pushDeploy(project.uid, req, files)
  try {
    for await (const event of progress) {
      switch (event.type) {
        case 'staticFile': {
          const percentage = (event.currentBytes / event.totalBytes) * 100
          uploadSpinner!.text = `Uploading ${files.length} asset${
            files.length === 1 ? '' : 's'
          }... (${percentage.toFixed(1)}%)`
          break
        }
        case 'load': {
          if (uploadSpinner) {
            uploadSpinner.succeed(
              `Uploaded ${files.length} new asset${
                files.length === 1 ? '' : 's'
              }.`,
            )
            uploadSpinner = null
          }
          if (deploySpinner === null) {
            deploySpinner = wait('Deploying...').start()
          }
          const progress = event.seen / event.total * 100
          deploySpinner.text = `Deploying... (${progress.toFixed(1)}%)`
          break
        }
        case 'uploadComplete':
          deploySpinner!.text = `Finishing deployment...`
          break
        case 'success': {
          const deploymentKind = opts.prod ? 'Production' : 'Preview'
          deploySpinner!.succeed(`${deploymentKind} deployment complete.`)
          console.log('\nView at:')
          for (const { domain } of event.domainMappings) {
            console.log(` - https://${domain}`)
          }
          break
        }
        case 'error':
          if (uploadSpinner) {
            uploadSpinner.fail(`Upload failed.`)
            uploadSpinner = null
          }
          if (deploySpinner) {
            deploySpinner.fail(`Deployment failed.`)
            deploySpinner = null
          }
          error(event.ctx)
      }
    }
  } catch (err: unknown) {
    if (err instanceof APIError) {
      if (uploadSpinner) {
        uploadSpinner.fail(`Upload failed.`)
        uploadSpinner = null
      }
      if (deploySpinner) {
        deploySpinner.fail(`Deployment failed.`)
        deploySpinner = null
      }
      error(err.toString())
    }
    error(String(err))
  }
}
