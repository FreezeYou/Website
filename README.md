# Website

- [自冻FreezeYou 主站](https://zidon.net)
- [自冻FreezeYou 镜像](https://2.zidon.net)
- [自冻FreezeYou 镜像](https://www.freezeyou.net)

## Development

Use Node.js 22.22.2+ (22.x) or 24.15.0+ (24.x), npm 12.0.2, and Python 3.
CI explicitly installs npm 12.0.2 to match the version used for the lockfile;
Node 22's bundled npm 10 rejects this lockfile's optional peer dependencies.

```sh
npm install --global npm@12.0.2
npm ci
python -X utf8 importTranslation.py
npm run docs:dev
```

To generate the production site, run `npm run docs:build`. Output is written to
`docs/.vuepress/dist/`.

The site uses VuePress and the Vite bundler at 2.0.0-rc.31, the default theme at
2.0.0-rc.136, and PWA/search plugins at 2.0.0-rc.135.
VuePress 2 is published under npm's `next` tag; keep the core and
bundler versions aligned when upgrading and commit the updated lockfile.
See the [VuePress changelog](https://github.com/vuepress/core/blob/main/CHANGELOG.md).

Edit `template/config.js` for configuration changes, then regenerate translations;
`docs/.vuepress/config.js` is generated. Prefetching remains disabled for PWA
caching, overriding RC.31's new `as-needed` default.


