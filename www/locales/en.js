import { legalEN } from '../.vitepress/config.sidebar'

export default {
  home: {
    hero: {
      topic: 'Designed for Modern Businesses',
      title: 'The smartest way to build custom internal tools',
      description: 'Easily build custom internal tools to centralize information, integrate systems and automate workflows. Build your back-office with full control, scalability and adaptability for growth.',
      buttons: [
        {
          type: 'lets-talk',
          text: 'Let\'s Talk',
        },
        // {
        //   type: 'video-scroll',
        //   text: 'Watch 1 min Intro',
        //   href: '#section-what',
        // },
      ],
      image: {
        alt: 'Netzo - Ship custom business apps faster to the right people',
        src: '/images/home/hero.svg',
      },
      items: [
        {
          icon: 'i-mdi-check-circle-outline',
          title: 'Developer centric',
        },
        {
          icon: 'i-mdi-check-circle-outline',
          title: 'Ship in hours, not months',
        },
        {
          icon: 'i-mdi-check-circle-outline',
          title: 'No vendor lock-in',
        },
        {
          icon: 'i-mdi-check-circle-outline',
          title: 'Enterprise-grade security',
        },
      ],
    },
    sectionWhat: {
      topic: 'What is Netzo?',
      title: 'The comprehensive platform to streamline operations with custom tools',
      items: [
        {
          icon: 'i-mdi-rocket',
          title: 'Use technology as an enabler',
          description: 'Build tools that evolve with your business, maximizing efficiency.',
        },
        {
          icon: 'i-mdi-clock-fast',
          title: 'From concept to production in hours, not months',
          description: '10x faster development and total focus on your business logic.',
        },
        {
          icon: 'i-mdi-arrow-expand',
          title: 'Total control, no vendor lock-in',
          description: 'Own the tools that give you the competitive advantage.',
        },
        {
          icon: 'i-mdi-security',
          title: 'Built-in security and visibility',
          description: 'Reduce risks and information leakage with built-in security controls.',
        },
      ],
      buttons: [
        {
          type: 'lets-talk',
          text: 'Let\'s Talk',
        },
      ],
      image: {
        alt: 'Netzo - Ship custom internal tools faster',
        src: '/images/home/netzo.svg',
        class: 'mb-8 !h-600px',
      },
      // image: {
      //   alt: 'Netzo - Ship custom business apps faster',
      //   src: '/netzo-intro-en.mp4',
      //   poster: '/netzo-intro-en.svg',
      //   class: 'mb-8',
      //   subtitles: [
      //     {
      //       label: 'English',
      //       kind: 'subtitles',
      //       srclang: 'en',
      //       src: '/netzo-intro-en.vtt',
      //       default: true,
      //     },
      //     {
      //       label: 'Español',
      //       kind: 'subtitles',
      //       srclang: 'es',
      //       src: '/netzo-intro-es.vtt',
      //       default: false,
      //     },
      //   ],
      // },
    },
    // sectionWhy: {
    //   topic: 'Why use Netzo?',
    //   title: 'Inefficiency kills companies',
    //   items: [
    //     {
    //       title: 'Revenue loss and slow growth',
    //       description: 'Inefficiencies cost businesses up to 30% of their revenue and limit growth potential.',
    //     },
    //     {
    //       title: 'Missed opportunities',
    //       description: 'Innovative ideas get buried in the backlog, leading to missed opportunities for growth and improvement.',
    //     },
    //     {
    //       title: 'Inability to adapt and scale',
    //       description: 'Sluggish businesses struggle to adapt to changing market conditions and risk their competitive edge.',
    //     },
    //   ],
    //   buttons: [
    //     {
    //       type: 'learn-more',
    //       text: 'Learn More',
    //       href: '/netzo/why-use-netzo',
    //     },
    //   ],
    // },
    sectionWhyNetzo: {
      topic: 'Why Netzo?',
      title: 'Better solutions tailored to your unique processes',
      items: [
        {
          icon: 'i-mdi-head-lightbulb-outline',
          title: 'Increase your competitive advantage',
          description: 'Innovate faster with less effort and gain the competitive edge over your competitors.',
        },
        {
          icon: 'i-bx-timer',
          title: 'Gain iterative velocity',
          description: 'Build with speed and clear objective between your developers and business goals.',
        },
        {
          icon: 'i-mdi-account-group-outline',
          title: 'Collaboration and adoption',
          description: 'Enable seamless collaboration and foster a closed feedback loop between teams and developers.',
        },
        {
          icon: 'i-tabler-packages',
          title: 'Orchestrate your data',
          description: 'Centralize data from all your systems,and gain visibility with cross system reporting.',
        },
        {
          icon: 'i-ic-baseline-hub',
          title: 'Centralize operations',
          description: 'Gain workflow visibility and closely monitor mission-critical processes.',
        },
        {
          icon: 'i-mdi-lock-open-variant-outline',
          title: 'Eliminate vendor lock-in',
          description: 'Take ownership of the solutions that give you the competitive edge.',
        },
        {
          icon: 'i-mdi-security',
          title: 'Eliminate security risks',
          description: 'Stay safe with built-in security controls and code auditing capabilities while maintaining full scalability.',
        },
        {
          icon: 'i-emojione-flag-for-european-union',
          title: 'EU-based and GDPR compliant',
          description: 'We are based in the EU and fully compliant with GDPR, driven by security by design.',
        },
      ],
    },
    sectionWhatCanYouBuild: {
      topic: 'What can you build?',
      title: 'Adaptable solutions your teams truly need',
      description: 'Build business-critical software solutions quickly and at a fraction of the traditional costs. Create business intelligence dashboards, enhance operations with admin panels, automated workflows, implement AI technologies into existing processes and structure data to enable seamless information exchange, all from a single place.',
      items: [
        {
          uid: 'app-know-your-customer-dashboard',
          title: 'Know-Your-Customer Dashboard',
          image: {
            src: 'https://raw.githubusercontent.com/netzo/netzo/main/templates/_requested/app-know-your-customer-dashboard/icon.svg',
          },
        },
        {
          uid: 'app-sales-dashboard',
          title: 'Sales Dashboard',
          image: {
            src: 'https://raw.githubusercontent.com/netzo/netzo/main/templates/app-sales-dashboard/icon.svg',
          },
        },
        {
          uid: 'workflow-capture-webhook-data-to-hubspot-resource',
          title: 'Capture Webhook data to HubSpot',
          image: {
            src: 'https://raw.githubusercontent.com/netzo/netzo/main/templates/_requested/workflow-capture-webhook-data-to-hubspot-resource/icon.svg',
          },
        },
        {
          uid: 'api-department-metrics',
          title: 'Department Metrics API',
          image: {
            src: '/images/home/apis.svg',
          },
        },
        {
          uid: 'app-gdpr-data-export-utility',
          title: 'GDPR Data Export Utility',
          image: {
            src: 'https://raw.githubusercontent.com/netzo/netzo/main/templates/_requested/app-gdpr-data-export-utility/icon.png',
          },
        },
        {
          uid: 'workflow-send-waalaxy-leads-to-activecampaign-contacts-and-companies',
          title: 'Send Waalaxy leads to Active- Campaign contacts & companies',
          image: {
            src: 'https://raw.githubusercontent.com/netzo/netzo/main/templates/workflow-send-waalaxy-leads-to-activecampaign-contacts-and-companies/icon.svg',
          },
        },
      ],
      buttons: [
        {
          variant: 'secondary',
          text: 'See More',
          href: '/docs/templates/apps',
        },
      ],
    },
    sectionHow: {
      topic: 'How does it work?',
      title: 'The versatility of code without the headaches',
      description: 'Say goodbye to costly, time-consuming and unmaintainable developments. Enjoy all the perks of full code control without any major efforts or maintenance requirments while building your back-office .',
      items: [
        {
          topic: 'Code',
          title: 'Maximum flexibility for developers via <code>JS</code>/<code>TS</code>',
          description: 'Create with confidence and flexibility. Build UIs with <code>JSX</code>/<code>TSX</code>, create (HTTP) APIs to power your apps and build multi-step workflows with full control over your scripts.',
          image: {
            alt: 'Code anything in JS/TS',
            src: '/images/home/1-code.svg',
            isGIF: true,
          },
          items: [
            {
              icon: 'i-mdi-code-braces',
              title: 'Code online or locally via the Netzo CLI',
            },
            {
              icon: 'i-mdi-bug',
              title: 'Debug fast with logs, metrics and error tracking',
            },
            {
              icon: 'i-mdi-api',
              title: 'Integrate any APIs, DBs or import your favorite libraries via URLs',
            },
          ],
        },
        {
          topic: 'Deploy',
          title: 'Ship faster and iterate at your pace',
          description: 'Easily deploy, modify, and maintain software solutions. Eliminate infrastructure overhead and focus on what truly matters: driving your business forward.',
          image: {
            alt: 'Deploy instantly, skip the DevOps',
            src: '/images/home/2-deploy.svg',
            isGIF: true,
          },
          items: [
            {
              icon: 'i-ic-baseline-hub',
              title: 'Centralize team efforts, drive adoption and avoid double work',
            },
            {
              icon: 'i-mdi-git',
              title: 'Continuous development, version control and environment support',
            },
            {
              icon: 'i-mdi-finance',
              title: 'Built-in analytics for real-time insights',
            },
          ],
        },
        {
          topic: 'Share',
          title: 'Collaborate and boost team productivity',
          description: 'Enable seamless collaboration and foster a closed feedback loop between teams and developers. Confidently create and share custom internal apps without extensive technical teams.',
          image: {
            alt: 'Collaborate and boost team productivity',
            src: '/images/home/3-share.svg',
            isGIF: true,
          },
          items: [
            {
              icon: 'i-mdi-share-variant',
              title: 'Share instantly and securely with groups and permissions',
            },
            {
              icon: 'i-mdi-police-badge',
              title: 'Audit logging for compliance, security and usage insights',
            },
            {
              icon: 'i-ic-outline-feedback',
              title: 'Adapt faster with internal feedback and feature requests',
            },
          ],
        },
      ],
    },
    sectionHowIsNetzoDifferentForDevelopers: {
      topic: 'Developer-centric',
      title: 'Superpowers for developers',
      items: [
        {
          icon: 'i-mdi-view-dashboard-outline',
          description: '<strong style="color: #0080ff"><a href="/docs/templates/apps">Templates</a></strong> to kickstart custom implementations in seconds',
        },
        {
          icon: 'i-mdi-hexagon-multiple',
          description: '<strong style="color: #0080ff"><a href="/docs/netzo/apis">Integrations</a></strong> to hundreds of APIs without reading docs',
        },
        {
          icon: 'i-mdi-widgets',
          description: '<strong style="color: #0080ff"><a href="/docs/netzo/ui/components">UI components</a></strong>, <strong style="color: #0080ff"><a href="/docs/netzo/ui/plugins">Plugins</a></strong> and <strong style="color: #0080ff"><a href="/docs/netzo/ui/composables">Utilities</a></strong> for speed and simplicity',
        },
        {
          icon: 'i-mdi-bug',
          description: '<strong style="color: #0080ff"><a href="/docs/platform/projects/logs">Logs</a></strong> and metrics for real-time observability and control',
        },
        {
          icon: 'i-mdi-send-clock',
          description: '<strong style="color: #0080ff"><a href="">Cron Job</a></strong> scheduling',
        },
        {
          icon: 'i-mdi-database-lock',
          description: 'Integrated <strong style="color: #0080ff"><a href="">KV Storage</a></strong> (soon)',
        },
        {
          icon: 'i-mdi-microsoft-visual-studio-code',
          description: '<strong style="color: #0080ff"><a href="/docs/netzo/cli">CLI</a></strong> for local development',
        },
        {
          icon: 'i-mdi-git',
          description: '<strong style="color: #0080ff"><a href="">Git support</a></strong> for version control',
        },
        {
          icon: 'i-mdi-rocket-launch',
          description: '<strong style="color: #0080ff">Deploy in one click</strong> without configuration or DevOps',
        },
      ],
    },
    sectionHowIsNetzoDifferent: {
      topic: 'How is Netzo different?',
      // title: 'Built on the most modern and secure technologies',
      title: 'Gain a competitive advantage with cutting-edge tech',
      items: [
        {
          icon: 'i-logos-deno',
          title: 'Powered by Deno',
          description: 'Built on the next generation JavaScript and TypeScript runtime to boost DX.',
        },
        {
          icon: 'i-mdi-nodejs',
          title: 'Full Node.js and NPM support',
          description: 'Code with favorita libraries with full Node.js built-in modules and NPM package support.',
        },
        {
          icon: 'i-fxemoji-lightningmood',
          title: 'Serverless',
          description: 'Instantly deploy your code globally to the edge. No infrastructure to provision or manage.',
        },
        {
          icon: 'i-logos-typescript-icon',
          title: 'Native TypeScript',
          description: 'Use TypeScript without builds or complex setups. Enjoy auto-completion and type safety.',
        },
        {
          icon: 'i-mdi-package-variant-closed',
          title: 'URL imports and enhanced portability',
          description: 'Forget <code>node_modules</code>. Import code directly from versioned URLs without installation.',
        },
        {
          icon: 'i-mdi-asterisk',
          title: 'Managed secrets',
          description: 'Keep secrets safe through an extra layer of security and re-use them fast when coding.',
        },
        {
          icon: 'i-mdi-console',
          title: 'Code locally via the Netzo CLI',

          description: 'Code in your favorite IDE and deploy to the cloud using <code>netzo/cli</code> with no extra setup or tooling.',
        },
        {
          icon: 'i-mdi-toolbox',
          title: 'Built-in toolbox of components and utilities',
          description: 'Import from <code>netzo</code>, a toolbox of components and utilities made to 10x your DX when developing software solutions.',
        },
      ],
    },
    sectionWhoIsNetzoFor: {
      topic: 'Who is Netzo for?',
      title: 'A central hub for teams in technology-driven businesses',
      image: {
        alt: 'Who is Netzo for?',
        src: '/images/home/code-deploy-share-feedback.svg',
        class: 'mb-8',
      },
      items: [
        {
          title: 'Developer Teams',
          description: 'Code, deploy, and share anything instantly, with total control and without managing infrastructure.',
          image: {
            alt: 'Developer Teams',
            src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xMiA1LjVBMy41IDMuNSAwIDAgMSAxNS41IDlhMy41IDMuNSAwIDAgMS0zLjUgMy41QTMuNSAzLjUgMCAwIDEgOC41IDlBMy41IDMuNSAwIDAgMSAxMiA1LjVNNSA4Yy41NiAwIDEuMDguMTUgMS41My40MmMtLjE1IDEuNDMuMjcgMi44NSAxLjEzIDMuOTZDNy4xNiAxMy4zNCA2LjE2IDE0IDUgMTRhMyAzIDAgMCAxLTMtM2EzIDMgMCAwIDEgMy0zbTE0IDBhMyAzIDAgMCAxIDMgM2EzIDMgMCAwIDEtMyAzYy0xLjE2IDAtMi4xNi0uNjYtMi42Ni0xLjYyYTUuNTM2IDUuNTM2IDAgMCAwIDEuMTMtMy45NmMuNDUtLjI3Ljk3LS40MiAxLjUzLS40Mk01LjUgMTguMjVjMC0yLjA3IDIuOTEtMy43NSA2LjUtMy43NXM2LjUgMS42OCA2LjUgMy43NVYyMGgtMTN2LTEuNzVNMCAyMHYtMS41YzAtMS4zOSAxLjg5LTIuNTYgNC40NS0yLjljLS41OS42OC0uOTUgMS42Mi0uOTUgMi42NVYyMEgwbTI0IDBoLTMuNXYtMS43NWMwLTEuMDMtLjM2LTEuOTctLjk1LTIuNjVjMi41Ni4zNCA0LjQ1IDEuNTEgNC40NSAyLjlWMjBaIi8+PC9zdmc+',
          },
        },
        {
          title: 'SMBs and Startups',
          description: 'Scale your operations with custom internal tools and workflow automation without breaking the bank.',
          image: {
            alt: 'Startups and SMBs',
            src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xMiAxOEg2di00aDZtOSAwdi0ybC0xLTVINGwtMSA1djJoMXY2aDEwdi02aDR2Nmgydi02bTAtMTBINHYyaDE2VjRaIi8+PC9zdmc+',
          },
        },
        {
          title: 'Enterprises',
          description: 'Increase operational efficiency with tailored software solutions and 100% adaptability to established processes.',
          image: {
            alt: 'Enterprises',
            src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik01IDN2MThoNnYtMy41aDJWMjFoNlYzSDVtMiAyaDJ2Mkg3VjVtNCAwaDJ2MmgtMlY1bTQgMGgydjJoLTJWNU03IDloMnYySDdWOW00IDBoMnYyaC0yVjltNCAwaDJ2MmgtMlY5bS04IDRoMnYySDd2LTJtNCAwaDJ2MmgtMnYtMm00IDBoMnYyaC0ydi0ybS04IDRoMnYySDd2LTJtOCAwaDJ2MmgtMnYtMloiLz48L3N2Zz4=',
          },
        },
      ],
    },
    sectionQuote: {
      name: 'Guillermo Rauch',
      title: 'CEO at Vercel',
      description: 'Software solutions are the invisible heartbeat of every single successful company.',
      image: {
        src: 'https://assets.vercel.com/image/upload/v1573246280/front/favicon/vercel/android-chrome-192x192.png',
        alt: 'Vercel logo',
        width: 49,
        height: 48,
      },
    },
    sectionBannerCta: {
      title: 'Ready to get started?',
      items: [
        { text: 'Create your digital back-office with full-code control' },
        { text: 'Deploy instantly and iterate fast, without the headaches' },
        { text: 'Share with your team and grow your business' },
      ],
      buttons: [
        {
          type: 'lets-talk',
          text: 'Let\'s Talk',
        },
      ],
    },
  },
  blog: {
    hero: {
      topic: 'blog',
      title: 'The Latest Netzo News',
      description: 'Stay updated on latest new, tips and tricks from the Netzo team and the community.',
    },
    banner: '<a href="#newsletter">Subscribe to receive updates!</a>',
  },
  contact: {
    general: {
      hero: {
        topic: 'Contact',
        title: 'Get Started with Netzo',
        description: 'Please fill out the form below and we will get back to you as soon as possible.',
        buttons: [
          {
            type: 'book-a-slot',
            text: 'Book a Demo',
          },
        ],
      },
    },
  },
  designKit: {
    hero: {
      topic: 'Design Kit',
      title: 'Share Your Netzo Creations',
      description: 'Our logos and brand are available for use when you link them to the netzo.io website and respect our trademark policy. We encourage you to use them for solutions powered by Netzo.',
    },
    banner: 'Right-click on the image and select \'Save image as...\'',
  },
  footer: {
    items: [
      {
        text: 'Solutions',
        items: [
          { text: 'What is Netzo?', link: '/netzo/what-is-netzo' },
          { text: 'Why use Netzo?', link: '/netzo/why-use-netzo' },
          { text: 'Who is Netzo for?', link: '/netzo/who-is-netzo-for' },
        ],
      },
      {
        text: 'Resources',
        items: [
          {
            text: 'Docs',
            link: '/docs/introduction/getting-started',
          },
          // {
          //   text: 'Help Center',
          //   link: 'https://help.netzo.io',
          // },
          {
            text: 'Templates',
            link: 'https://app.netzo.io/templates',
          },
          {
            text: 'Integrations',
            link: '/docs/netzo/apis',
          },
          {
            text: 'Contact',
            link: 'mailto:help@netzo.io?subject=%20How%20can%20we%20help%3F',
          },
          {
            text: 'Design Kit',
            link: '/design-kit',
          },
        ],
      },
      {
        text: 'Legal',
        items: [
          ...legalEN.items,
          { text: 'Privacy Settings', onClick: () => window.UC_UI.showSecondLayer() },
        ],
      },
    ],
  },
  apis: [
    {
      uid: 'activecampaign',
      title: 'ActiveCampaign',
      description: 'ActiveCampaign is a customer experience automation (CXA) platform that helps businesses better engage customers. Access your ActiveCampaign data and automate your marketing, sales, and support processes.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/activecampaign.svg',
      href: '/docs/netzo/apis/activecampaign',
    },
    {
      uid: 'airtable',
      title: 'Airtable',
      description: 'Airtable is a low-code platform for building collaborative apps. Customize your workflow, collaborate, and achieve ambitious outcomes. Get started for free.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/airtable.svg',
      href: '/docs/netzo/apis/airtable',
    },
    {
      uid: 'brevo',
      title: 'Brevo',
      description: 'Brevo is a platform that allows you to create and manage your own chatbots. It is a tool that allows you to create and manage your own chatbots. It is a tool that allows you to create and manage your own chatbots.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/brevo.svg',
      href: '/docs/netzo/apis/brevo',
    },
    {
      uid: 'chartmogul',
      title: 'ChartMogul',
      description: 'ChartMogul is a subscription analytics platform, helping you to measure, understand and grow your subscription business.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/chartmogul.svg',
      href: '/docs/netzo/apis/chartmogul',
    },
    {
      uid: 'clickup',
      title: 'ClickUp',
      description: 'ClickUp is a productivity platform that provides a fundamentally new way to work. More than just task management - ClickUp offers notes, reminders, goals, calendar, scheduling, and even an inbox. Fully customizable, ClickUp works for every type of team, so all teams can use the same app to plan, organize, and collaborate.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/clickup.svg',
      href: '/docs/netzo/apis/clickup',
    },
    {
      uid: 'cloudflare',
      title: 'Cloudflare',
      description: 'Cloudflare is a web performance and security company that provides online services to protect and accelerate websites online.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/cloudflare.svg',
      href: '/docs/netzo/apis/cloudflare',
    },
    {
      uid: 'discord',
      title: 'Discord',
      description: 'Discord is a voice, video and text communication service to talk and hang out with your friends and communities.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/discord.svg',
      href: '/docs/netzo/apis/discord',
    },
    {
      uid: 'facturama',
      title: 'Facturama',
      description: 'Facturama is a mexican billing and electronic invoicing solution.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/facturama.svg',
      href: '/docs/netzo/apis/facturama',
    },
    {
      uid: 'fathomanalytics',
      title: 'Fathom Analytics',
      description: 'Fathom Analytics provides simple, useful websites stats without tracking or storing personal data of your users..',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/fathomanalytics.svg',
      href: '/docs/netzo/apis/fathomanalytics',
    },
    {
      uid: 'github',
      title: 'Github',
      description: 'GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside millions of other developers.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/github.svg',
      href: '/docs/netzo/apis/github',
    },
    {
      uid: 'googleappsheet',
      title: 'Google AppSheet',
      description: 'AppSheet is a no-code development platform that allows you to build quick apps on Spreadsheets.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/googleappsheet.svg',
      href: '/docs/netzo/apis/googleappsheet',
    },
    {
      uid: 'googledrive',
      title: 'Google Drive',
      description: 'Google Drive is a file storage and synchronization service developed by Google.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/googledrive.svg',
      href: '/docs/netzo/apis/googledrive',
    },
    {
      uid: 'googlesheets',
      title: 'Google Sheets',
      description: 'Google Sheets is a spreadsheet program included as part of a free, web-based software office suite offered by Google within its Google Drive service.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/googlesheets.svg',
      href: '/docs/netzo/apis/googlesheets',
    },
    {
      uid: 'holded',
      title: 'Holded',
      description: 'Holded is a business management software that helps you manage sales, accounting, inventory, and taxes in one place.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/holded.svg',
      href: '/docs/netzo/apis/holded',
    },
    {
      uid: 'hubspot',
      title: 'HubSpot',
      description: 'HubSpot offers a full stack of software for marketing, sales, and customer service, with a completely free CRM at its core.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/hubspot.svg',
      href: '/docs/netzo/apis/hubspot',
    },
    {
      uid: 'ipgeolocation',
      title: 'IP Geolocation',
      description: 'IP Geolocation API allows developers to get geolocation information for a given IP address. Data points returned by this GeoIP API include city, state, province, country, continent, latitude, longitude, region, timezone, current time, organization, ISP, local currency, and country flags.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/ipgeolocation.svg',
      href: '/docs/netzo/apis/ipgeolocation',
    },
    {
      uid: 'jsonplaceholder',
      title: 'JSONPlaceholder',
      description: 'JSONPlaceholder is a free online REST API that you can use whenever you need some fake data.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/jsonplaceholder.svg',
      href: '/docs/netzo/apis/jsonplaceholder',
    },
    {
      uid: 'medium',
      title: 'Medium',
      description: 'Medium is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/medium.svg',
      href: '/docs/netzo/apis/medium',
    },
    {
      uid: 'monday',
      title: 'Monday',
      description: 'monday.com is a work OS that powers teams to run processes, projects and workflows in one digital workspace.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/monday.svg',
      href: '/docs/netzo/apis/monday',
    },
    {
      uid: 'mongodbatlasdata',
      title: 'Mongodb Atlas Data',
      description: 'MongoDB Atlas Data API is a new managed API that allows developers to retrieve live data from their Atlas deployments without the need to write any client-side code.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/mongodbatlasdata.svg',
      href: '/docs/netzo/apis/mongodbatlasdata',
    },
    {
      uid: 'netzo',
      title: 'Netzo',
      description: 'Netzo is the smartest way to build custom internal tools and automate workflows. Build your back-office with full-code control and without managing infrastructure.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/netzo.svg',
      href: '/docs/netzo/apis/netzo',
    },
    {
      uid: 'openai',
      title: 'OpenAI',
      description: 'OpenAI powers Chat GPT and DALL-E and lets you integrate the API into your apps.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/openai.svg',
      href: '/docs/netzo/apis/openai',
    },
    {
      uid: 'pandadoc',
      title: 'Pandadoc',
      description: 'PandaDoc is an all-in-one software that streamlines your sales workflows. Create, send, track, and eSign client-facing documents designed to win more business.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/pandadoc.svg',
      href: '/docs/netzo/apis/pandadoc',
    },
    {
      uid: 'pipedrive',
      title: 'Pipedrive',
      description: 'Pipedrive is a CRM & pipeline management tool that helps you focus on actions that matter. By sales pros, for sales pros.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/pipedrive.svg',
      href: '/docs/netzo/apis/pipedrive',
    },
    {
      uid: 'rest',
      title: 'REST',
      description: 'REST is a generic API client for REST APIs. Use it to interact with any REST API.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/rest.svg',
      href: '/docs/netzo/apis/rest',
    },
    {
      uid: 'restdb',
      title: 'RestDB',
      description: 'RestDB is a NoSQL cloud database service with a REST API and a rich query language to power your web, mobile and IoT apps.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/restdb.svg',
      href: '/docs/netzo/apis/restdb',
    },
    {
      uid: 'sendgrid',
      title: 'Sendgrid',
      description: 'SendGrid is a cloud-based SMTP provider that allows you to send email without having to maintain email servers.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/sendgrid.svg',
      href: '/docs/netzo/apis/sendgrid',
    },
    {
      uid: 'shopify',
      title: 'Shopify',
      description: 'Shopify is a complete commerce platform that lets you start, grow, and manage a business.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/shopify.svg',
      href: '/docs/netzo/apis/shopify',
    },
    {
      uid: 'stripe',
      title: 'Stripe',
      description: 'Stripe is a payments gateway and merchant account provider that allows you to accept credit card payments.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/stripe.svg',
      href: '/docs/netzo/apis/stripe',
    },
    {
      uid: 'whatsappbusiness',
      title: 'WhatsApp Business',
      description: 'Whatsapp Business is a messaging platform for businesses to communicate with their customers.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/whatsappbusiness.svg',
      href: '/docs/netzo/apis/whatsappbusiness',
    },
    {
      uid: 'wix',
      title: 'Wix',
      description: 'Wix is a cloud-based development platform that lets anyone create a visually acctractive websites and e-commerce stores without any coding skills.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/wix.svg',
      href: '/docs/netzo/apis/wix',
    },
    {
      uid: 'notion',
      title: 'Notion',
      description: 'Notion is an all-in-one workspace for your notes, tasks, wikis, and databases.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/notion.svg',
      href: '/docs/netzo/apis/notion',
    },
    {
      uid: 'mailchimpmarketing',
      title: 'Mailchimp Marketing',
      description: 'Mailchimp Marketing is an all-in-one marketing platform that helps you manage and talk to your clients, customers, and other interested parties.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/mailchimp.svg',
      href: '/docs/netzo/apis/mailchimpmarketing',
    },
    {
      uid: 'mailgun',
      title: 'Mailgun',
      description: 'Mailgun is an email automation service provided by Rackspace.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/apis/mailgun.svg',
      href: '/docs/netzo/apis/mailgun',
    },
  ].sort((a, b) => a.uid.localeCompare(b.uid)),
  plugins: [
    {
      uid: 'dasiyui',
      title: 'DaisyUI',
      description: 'DaisyUI is a component library for Tailwind CSS that allows you to easily build beautiful UIs for your web apps.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/plugins/daisyui.svg',
      href: '/docs/netzo/ui/plugins/daisyui',
    },
    {
      uid: 'flowbite',
      title: 'Flowbite',
      description: 'Flowbite is an open-source library of over 600+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/plugins/flowbite.svg',
      href: '/docs/netzo/ui/plugins/flowbite',
    },
    {
      uid: 'netzoAppLayout',
      title: 'Netzo App Layout',
      description: 'Adds a global layout route from which all other routes inherit from.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/plugins/netzoAppLayout.svg',
      href: '/docs/netzo/ui/plugins/netzoAppLayout',
    },
    {
      uid: 'netzoAuth',
      title: 'Netzo Auth',
      description: 'Adds a middleware to protect routes with authentication based on access control settings set for the project in Netzo.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/plugins/netzoAuth.svg',
      href: '/docs/netzo/ui/plugins/netzoAuth',
    },
    {
      uid: 'netzoErrorPages',
      title: 'Netzo Error Pages',
      description: 'Adds routes to render a custom error page for "404: Not Found" and "500: Server Error".',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/plugins/netzoErrorPages.svg',
      href: '/docs/netzo/ui/plugins/netzoErrorPages',
    },
    {
      uid: 'unocss',
      title: 'UnoCSS',
      description: 'UnoCSS is an instant, on-demand atomic CSS engine. It generates atomic CSS classes on the fly based on the classes and attributes used in your project.',
      src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/plugins/unocss.svg',
      href: '/docs/netzo/ui/plugins/unocss',
    },
  ].sort((a, b) => a.uid.localeCompare(b.uid)),
  components: [
    {
      uid: 'table',
      title: 'Table',
      category: 'data',
      description: 'Display tabulated data.',
      icon: 'i-mdi-table',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/table.svg',
      href: '/docs/netzo/ui/components/NTable',
    },
    {
      uid: 'button',
      title: 'Button',
      category: 'elements',
      description: 'Trigger queries or actions with a button.',
      icon: 'i-mdi-button-pointer',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/button.svg',
      href: '/docs/netzo/ui/components/NButton',
    },
    {
      uid: 'chip',
      title: 'Chip',
      category: 'elements',
      description: 'Display a collection of tags.',
      icon: 'i-mdi-label',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/chip.svg',
      href: '/docs/netzo/ui/components/NChip',
    },
    {
      uid: 'darktoggle',
      title: 'DarkToggle',
      category: 'elements',
      description: 'Toggle a dark mode theme.',
      icon: 'i-mdi-theme-light-dark',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/darktoggle.svg',
      href: '/docs/netzo/ui/components/NDarkToggle',
    },
    {
      uid: 'dropdown',
      title: 'Dropdown',
      category: 'elements',
      description: 'Select options from a dropdown menu.',
      icon: 'i-mdi-form-dropdown',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/dropdown.svg',
      href: '/docs/netzo/ui/components/NDropdown',
    },
    {
      uid: 'icon',
      title: 'Icon',
      category: 'elements',
      description: 'Display an icon symbol.',
      icon: 'i-mdi-shape',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/icon.svg',
      href: '/docs/netzo/ui/components/NIcon',
    },
    {
      uid: 'iconbutton',
      title: 'IconButton',
      category: 'elements',
      description: 'Trigger queries or actions with an icon button.',
      icon: 'i-mdi-button-pointer',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/iconbutton.svg',
      href: '/docs/netzo/ui/components/NIconButton',
    },
    {
      uid: 'icontitle',
      title: 'IconTitle',
      category: 'elements',
      description: 'Display an icon with a title.',
      icon: 'i-mdi-format-title',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/icontitle.svg',
      href: '/docs/netzo/ui/components/NIconTitle',
    },
    {
      uid: 'link',
      title: 'Link',
      category: 'elements',
      description: 'Trigger queries or actions with a hyperlink.',
      icon: 'i-mdi-link',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/link.svg',
      href: '/docs/netzo/ui/components/NLink',
    },
    {
      uid: 'loading',
      title: 'Loading',
      category: 'elements',
      description: 'Display a loading indicator.',
      icon: 'i-mdi-loading',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/loading.svg',
      href: '/docs/netzo/ui/components/NLoading',
    },
    {
      uid: 'tip',
      title: 'Tip',
      category: 'elements',
      description: 'Provide contextual tips and hints.',
      icon: 'i-mdi-information',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/tip.svg',
      href: '/docs/netzo/ui/components/NTip',
    },
    {
      uid: 'checkbox',
      title: 'Checkbox',
      category: 'form',
      description: 'Toggle a boolean value using a checkbox.',
      icon: 'i-mdi-checkbox-marked',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/checkbox.svg',
      href: '/docs/netzo/ui/components/NCheckbox',
    },
    {
      uid: 'form',
      title: 'Form',
      category: 'form',
      description: 'Group inputs and submit their values.',
      icon: 'i-mdi-format-list-group',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/form.svg',
      href: '/docs/netzo/ui/components/NForm',
    },
    {
      uid: 'inputtext',
      title: 'InputText',
      category: 'form',
      description: 'Enter a single line of text.',
      icon: 'i-mdi-form-textbox',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/inputtext.svg',
      href: '/docs/netzo/ui/components/NInputText',
    },
    {
      uid: 'inputdate',
      title: 'InputDate',
      category: 'form',
      description: 'Select or enter a date.',
      icon: 'i-mdi-calendar',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/inputdate.svg',
      href: '/docs/netzo/ui/components/NInputDate',
    },
    {
      uid: 'inputdaterange',
      title: 'InputDateRange',
      category: 'form',
      description: 'Specify start and end dates for a range.',
      icon: 'i-mdi-calendar-range',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/inputdaterange.svg',
      href: '/docs/netzo/ui/components/NInputDateRange',
    },
    {
      uid: 'radio',
      title: 'Radio',
      category: 'form',
      description: 'Select one value from a set of options.',
      icon: 'i-mdi-radiobox-marked',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/radio.svg',
      href: '/docs/netzo/ui/components/NRadio',
    },
    {
      uid: 'select',
      title: 'Select',
      category: 'form',
      description: 'Select or enter a single value from a dropdown.',
      icon: 'i-mdi-form-select',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/select.svg',
      href: '/docs/netzo/ui/components/NSelect',
    },
    {
      uid: 'switch',
      title: 'Switch',
      category: 'form',
      description: 'Toggle a boolean value using a switch.',
      icon: 'i-mdi-toggle-switch',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/switch.svg',
      href: '/docs/netzo/ui/components/NSwitch',
    },
    {
      uid: 'card',
      title: 'Card',
      category: 'layout',
      description: 'Group components in a card.',
      icon: 'i-mdi-card-text',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/card.svg',
      href: '/docs/netzo/ui/components/NCard',
    },
    {
      uid: 'panelgrids',
      title: 'PanelGrids',
      category: 'layout',
      description: 'Organize components in a grid layout.',
      icon: 'i-mdi-view-grid',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/panelgrids.svg',
      href: '/docs/netzo/ui/components/NPanelGrids',
    },
    {
      uid: 'sectionblock',
      title: 'SectionBlock',
      category: 'layout',
      description: 'Group components in a section block.',
      icon: 'i-mdi-view-sequential',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/sectionblock.svg',
      href: '/docs/netzo/ui/components/NSectionBlock',
    },
    {
      uid: 'dialog',
      title: 'Dialog',
      category: 'overlay',
      description: 'Display a modal dialog overlay.',
      icon: 'i-mdi-window-maximize',
      // src: 'https://raw.githubusercontent.com/netzo/netzo/main/assets/components/dialog.svg',
      href: '/docs/netzo/ui/components/NDialog',
    },
  ].sort((a, b) => a.uid.localeCompare(b.uid)),
}
