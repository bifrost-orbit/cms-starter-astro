import { defineConfig, envField, memoryCache } from 'astro/config'
import node from '@astrojs/node'

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  cache: { provider: memoryCache() },
  env: {
    schema: {
      CMS_API_URL: envField.string({ context: 'server', access: 'public' }),
      CMS_PUBLIC_KEY: envField.string({ context: 'server', access: 'secret' }),
      CMS_PREVIEW_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      CMS_WEBHOOK_SECRET: envField.string({ context: 'server', access: 'secret', optional: true }),
      CMS_DEFAULT_REGION: envField.string({ context: 'server', access: 'public', default: 'global' }),
    },
  },
})
