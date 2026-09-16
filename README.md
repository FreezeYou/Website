# Website

- [自冻FreezeYou 主站](https://zidon.net)
- [自冻FreezeYou 镜像](https://2.zidon.net)
- [自冻FreezeYou 镜像](https://www.freezeyou.net)

## Development

Requires Node.js >=22.18.0, npm, and Python 3.

```sh
npm ci
python -X utf8 importTranslation.py
npm run docs:dev
```

To generate the production site, run `npm run docs:build`. Output is written to
`docs/.vuepress/dist/`.

The site uses VuePress 2.0.0-rc.31 with the Vite bundler and theme/plugins at
2.0.0-rc.134. VuePress 2 is published under npm's `next` tag; keep the core and
bundler versions aligned when upgrading and commit the updated lockfile.
See the [VuePress changelog](https://github.com/vuepress/core/blob/main/CHANGELOG.md).

Edit `template/config.js` for configuration changes, then regenerate translations;
`docs/.vuepress/config.js` is generated. Prefetching remains disabled for PWA
caching, overriding RC.31's new `as-needed` default.


