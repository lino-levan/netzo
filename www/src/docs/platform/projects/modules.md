# Modules

**Modules provide essential functionality to add to your projects a plug-and-play fashion.** The Modules page will display a list of all `modules` registered in the `netzo.config` file of the project. Modules only work when deployed to Netzo, making them different to [`netzo/plugins`](/docs/netzo/plugins) which are normal [Fresh plugins](https://fresh.deno.dev/) plugins.

<!-- ![Modules](/docs/images/modules/modules-overview.webp) -->

## Adding Modules

Adding a module is as simple as registering it in the `netzo.config` file of the project.

```ts
export default defineNetzoConfig({
  modules: {
    [uid]: { /* config */ }
  }
})
```

with `uid` being a unique identifier for the module.

### Core Modules

Core modules are maintained by the Netzo team and are listed under [`netzo/modules`](/docs/netzo/modules). All core modules provide sensible defaults to simplify configuration and are modular by design, ensuring they work together seamlessly.

::: tabs
== Manual
Register the module `netzo.config.(ts|js)`
```ts
export default defineNetzoConfig({
  modules: {
    auth: { /* config */ }
  }
})
```
== CLI (soon)
Run the following command in your terminal.
```sh
netzo add module <moduleName>
```
== UI (soon)
Coming soon...
:::

### Custom Modules

Custom modules can be register in the same way in the `netzo.config` file of the project by passing the requried configuration. Doing so will allow Netzo to display the module in the Modules page.

For example, to register the Fresh plugin `unocss` as a custom module in `netzo.config.(ts|js)` and make it available in the Modules page, you can do the following:


::: tabs
== Manual
Register the module `netzo.config.(ts|js)`
```ts
export default defineNetzoConfig({
  modules: {
    unocss: {
      name: 'UnoCSS',
      avatar: 'https://api.iconify.design/logos-unocss.svg',
      fresh: {
        plugins: [
          unocss({ /* config */ })
        ]
      }
    }
  }
})
```
:::