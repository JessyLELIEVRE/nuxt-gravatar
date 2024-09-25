# Nuxt Gravatar

A dead simple Gravatar component for NuxtJS 3.

## Installation

```none
npm i @eurym3d0n/nuxt-gravatar
```

or

```none
yarn add @eurym3d0n/nuxt-gravatar
```

or

```none
pnpm add @eurym3d0n/nuxt-gravatar
```

## Usage

Register the module in your `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: [
    'nuxt-gravatar',
  ],
})
```

And you can now use it wherever you'd like to like this:

```vue
<NuxtGravatar email="your_email@mail.com" size="128" class="rounded-md w-32 h-32 mb-2 hover:opacity-80 transition-opacity" />
```

or

```vue
<NuxtGravatar hash="your_hash" size="128" class="rounded-md w-32 h-32 mb-2 hover:opacity-80 transition-opacity" />
```

### Props

| Prop Name | Type | Default | Required | Description |
|-----------|------|---------|----------|-------------|
|email      |String| -       | [ ]       | Your email address|
|hash       |String| -       | [ ]       | Your pre-generated SHA256 hash|
|size       |Number| 320     | [ ]       | Size of the Gravatar image |
|alt        |String| -       | [ ]       | Size of the Gravatar image |
|defaultImg |String| retro   | [ ]       | '404' or 'mp' or 'identicon' or 'monsterid' or 'wavatar' |
|rating     |String| g       | [ ]       | 'g' or 'pg' or 'r' or 'x' |
|classList        |String| -       | [ ] |	Optional class names to style the image. |

### To-Do
* [ ] Make Test

---

This README provides clear installation instructions, usage examples, and documentation for the props. Let me know if you'd like any adjustments!
