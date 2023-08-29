# Cloudflare Pages Deploy Plugin

[![NPM](https://img.shields.io/npm/v/netlify-plugin-cloudflare-pages-deploy.svg)](https://www.npmjs.com/package/netlify-plugin-cloudflare-pages-deploy)

**Deploy your static site to [the Fastest web hosting network in the world](https://pages.cloudflare.com/) from [the Greatest DX web hosting platform](https://netlify.app/).**

> An awesome plugin to make you Netlify as a CI/CD tool for Cloudflare Pages

## What is this?

This is a simple plugin for Netlify to deploy your static site to Cloudflare Pages. This plugin is suitable for making CI/CD with Netlify, but hosting your static site on Cloudflare Pages.

## Why

Cause Netlify has a great Developer Experience CI/CD platform for many javascript frameworks.

- It's easy to configure.
- Widely runtimes and package manager supports.
- Multiple build environment and deployment scopes Eg. `Production`, `Deploy Previews` and `Branch deploys` (separated for each branches)
- Great build caching and build time.
- There are many ready-to-integrate plugins (and local customized plugin supports)

But Cloudflare Pages is lightning fast and has much better network latency than Netlify. Your sites will deploy on Cloudflare's edge network that's the fastest network in the world.

See more about: [Cloudflare Pages is Lightning Fast
](https://blog.cloudflare.com/cloudflare-pages-is-lightning-fast/)

## How it works?

This plugin is using [Cloudflare Wrangler](https://developers.cloudflare.com/workers/wrangler) for under-the-hood to deploy your site to Cloudflare Pages.
It will run `$ wrangler pages deploy <PUBLISH_DIR> --project-name=<PROJECT_NAME> --branch=<BRANCH>` command after Netlify build your site.

## How to use?

0. Prepare your Cloudflare Page project via `wrangler`

```sh
$ npx wrangler pages project create <PROJECT_NAME>
```

1. Add Environment Variables to Netlify

   - `CLOUDFLARE_ACCOUNT_ID`: Your target Cloudflare Account ID. See more: [Find your zone and account IDs
     ](https://developers.cloudflare.com/fundamentals/setup/find-account-and-zone-ids/)
   - `CLOUDFLARE_API_TOKEN` : Your Cloudflare API Token (with `Pages:Edit` permission) See more: [Create a Cloudflare API token
     ](https://developers.cloudflare.com/workers/wrangler/ci-cd/#create-a-cloudflare-api-token)
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

Add `wrangler` to your project and use your lover package managers like`npm`, `yarn` or `pnpm` to run `wrangler` command instead `npx` or `pnpx`.

This will make your build faster cause Netlify always caching dependencies and `wrangler` will be cached too.

```sh
$ yarn add --dev wrangler
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
