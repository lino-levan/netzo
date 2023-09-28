<script setup>
import SectionDocsCards from '@theme/components/sections/SectionDocsCards.vue'
import en from '~/locales/en.js'
import { ui } from '~/../lib/components/registry.ts'
import { buildDenoJson } from '~/src/utils.ts'
const item = en.components.find(({ uid }) => uid === 'scroll-area')
const entry = ui.find(i => item.uid === i.name)
</script>

<div class="mb-5 w-75px h-75px"  :class="item.icon" />

# `scroll-area`

{{ item.description }}

[`Radix UI`](https://www.radix-ui.com/primitives/docs/components/scroll-area)
&nbsp;
[`API Reference`](https://www.radix-ui.com/primitives/docs/components/scroll-area#api-reference)

## Installation

::: tabs
== Manual
Add required imports in `deno.json`
```json-vue
{{ buildDenoJson(entry) }}
```
== CLI (soon)
Run the following command in your terminal.
```sh
netzo add component scroll-area
```
:::

## Usage

After [installation](#installation) components can be imported and used directly.

```tsx
import { ScrollArea } from 'netzo/components/ui/scroll-area.tsx'
```

## Examples

Working examples to copy-paste into projects under `components/ui/`.

### Default

::: code-group
<<< @/../../lib/components/example/scroll-area.tsx
:::