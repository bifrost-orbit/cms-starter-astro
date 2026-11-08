import type { APIRoute } from 'astro'
import { cacheTags, verifyWebhook } from '@bifrost-orbit-cms/sdk'
import { CMS_WEBHOOK_SECRET } from 'astro:env/server'

export const POST: APIRoute = async ({ request, cache }) => {
  if (!CMS_WEBHOOK_SECRET) return new Response(null, { status: 401 })
  const result = await verifyWebhook({
    body: await request.text(),
    timestamp: request.headers.get('x-orbit-timestamp'),
    signature: request.headers.get('x-orbit-signature'),
    secret: CMS_WEBHOOK_SECRET,
  })
  if (!result.valid) return new Response(null, { status: 401 })
  if (result.event === 'webhook.test') return new Response(null, { status: 204 })

  const pageTag = result.tags.find((tag) => tag.startsWith('cms:page:'))
  await cache.invalidate({ tags: pageTag ?? cacheTags.all })
  return new Response(null, { status: 204 })
}
