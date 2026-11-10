# CMS Orbit starter for Astro

An Astro website, rendered on the server with the Node.js adapter, that reads its pages from [CMS Orbit](https://bifrostorbit.com/products/cms-orbit/), the headless CMS in Bifröst Orbit. It is the finished project from the [Astro quickstart](https://docs.bifrostorbit.com/cms/developers/quickstart-astro/): every published page at its own address, your own `.astro` components for the blocks editors place, drafts in the live preview, and a signed webhook that clears the page cache when editors publish.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/bifrost-orbit/cms-starter-astro?quickstart=1)

## Set up

1. **Create your copy.** Select **Use this template** on GitHub, or run `gh repo create my-website --template bifrost-orbit/cms-starter-astro --private --clone`.
2. **Add your settings.** Copy `.env.example` to `.env` and fill in the API address, keys and region from **Configuration › API keys** and **Configuration › Environments** in CMS Orbit.
3. **Run it.** Run `npm install`, then `npm run dev`, and open `http://localhost:4321`.

## What's inside

| File | What it does |
| --- | --- |
| `astro.config.mjs` | Server rendering, the page cache and the settings, with the keys kept out of browser code |
| `src/lib/cms.ts` | The CMS Orbit client, and the preview token check |
| `src/pages/[...slug].astro` | One route for every page: redirects, not found, gone and caching |
| `src/layouts/Layout.astro` | Title, description, language, and the preview bridge for drafts |
| `src/components/Block.astro`, `src/components/registry.ts` | Which component draws which CMS component |
| `src/components/` | The components: `hero`, `featureSpotlight` and `action` |
| `src/pages/api/cms-webhook.ts` | The signed webhook that clears cached pages when editors publish |

## Make it yours

- Run `npm run cms:types` to write your space's components to `src/cms/types.ts`.
- Write your components in `src/components/` and register them in `src/components/registry.ts`, using the component keys from your own space.
- For the live preview, set **Preview URL** in the space's **Settings**. For refresh on publish, add a webhook to `https://your-website/api/cms-webhook` and put its secret in `CMS_WEBHOOK_SECRET`. The [quickstart](https://docs.bifrostorbit.com/cms/developers/quickstart-astro/) explains both.
- To run it in production, run `npm run build`, then `npm start`. It listens on `PORT` (4321 by default) and reads `.env` when there is one.

Needs Node.js 22.23 or later and `@bifrost-orbit-cms/sdk` 0.12.

## Licence

MIT. See [LICENSE](LICENSE).
