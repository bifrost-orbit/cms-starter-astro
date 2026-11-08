import { createCmsClient } from '@bifrost-orbit-cms/sdk'
import { CMS_API_URL, CMS_DEFAULT_REGION, CMS_PREVIEW_KEY, CMS_PUBLIC_KEY } from 'astro:env/server'

export const cms = createCmsClient({
  baseUrl: CMS_API_URL,
  apiKey: CMS_PUBLIC_KEY,
  previewKey: CMS_PREVIEW_KEY,
  defaultRegion: CMS_DEFAULT_REGION,
})

export async function isPreview(url: URL): Promise<boolean> {
  if (!CMS_PREVIEW_KEY) return false
  const check = await cms.checkPreview(url.searchParams.get('preview'))
  return check.valid
}
