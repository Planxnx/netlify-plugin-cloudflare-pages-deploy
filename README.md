# Cloudflare Pages Deploy Plugin

> An awesome plugin to make you Netlify as a CI/CD tool for Cloudflare Pages

## What is this?

This is simple plugin for Netlify to deploy your site to Cloudflare Pages. Now you can use Netlify as a CI/CD tool and host your site on Cloudflare Pages.

## How it works?

This plugin is using [Cloudflare Wrangler](https://developers.cloudflare.com/workers/wrangler) to deploy your site to Cloudflare Pages.
It will run `npx wrangler pages deploy <PUBLISH_DIR> --project-name=<PROJECT_NAME> --branch=<BRANCH>` command after Netlify build your site.

## How to use?

1. Add Environment Variables to Netlify

   - `CLOUDFLARE_ACCOUNT_ID`: Your target Cloudflare Account ID
   - `CLOUDFLARE_API_TOKEN` : Your Cloudflare API Token (with `Pages:Edit` permission)
   - `CLOUDFLARE_PAGES_PROJECT_NAME`: Your Cloudflare Pages Project Name

2. Add this plugin to your `netlify.toml` (this for monorepo path)

```toml
# for all deploy contexts (production, branch deploys, Deploy Previews).

[[plugins]]
   package = "netlify-plugin-cloudflare-pages-deploy"
   [plugins.inputs]
      package_exec = "pnpx"
```

```toml
# for specific deploy context [`production`, `deploy-preview`, `branch-deploy`, `dev`]

package = "netlify-plugin-cloudflare-pages-deploy"
```

### [Recommend]

Add `wrangler` to your `package.json` and use package manager like`npm`, `yarn` or `pnpm` to run `wrangler` command instead `npx` or `pnpx`.

This will make your build faster cause Netlify always caching dependencies and `wrangler` will be cached too.

```json
{
  "devDependencies": {
    "wrangler": "^3.6.0"
  }
}
```

```toml
[[plugins]]
   package = "netlify-plugin-cloudflare-pages-deploy"
   [plugins.inputs]
      package_exec = "yarn"
```

## For more information about:

- Deploy Context: https://docs.netlify.com/site-deploys/overview/#deploy-contexts
- Netlify Plugin: https://docs.netlify.com/integrations/build-plugins/
- Cloudflare Pages Direct Upload: https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/
- Cloudflare Wrangler Commands: https://developers.cloudflare.com/workers/wrangler/commands/#pages
