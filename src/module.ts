import { fileURLToPath } from 'node:url'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@eurym3d0n/nuxt-gravatar',
  },

  setup(_options, _nuxt) {},

  hooks: {
    'components:dirs'(dirs) {
      dirs.push({
        path: fileURLToPath(new URL('./components', import.meta.url)),
        prefix: 'NuxtGravatar',
      })
    },
  },
})
