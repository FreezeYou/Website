import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  title: '自冻 FreezeYou',
  description: '自冻 FreezeYou',
  locales: {
    /*{{@locales_content}}*/
  },
  head: [
    ['link', { rel: 'icon', href: '/assets/img/logo.svg' }],
    ['link', { rel: 'manifest', href: '/assets/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#2B60FF' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/assets/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/assets/icons/safari-pinned-tab.svg', color: '#2B60FF' }],
    ['meta', { name: 'msapplication-TileImage', content: '/assets/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['script', { src: '/assets/js/lang.min.js' }],
    ['script', { src: '/assets/js/statistics.js' }]
  ],
  bundler: viteBundler(),
  // Recommended when using @vuepress/plugin-pwa (service worker caches assets)
  shouldPrefetch: false,
  plugins: [
    pwaPlugin({
      serviceWorkerFilename: 'service-worker.js',
      update: 'available',
      locales: {
        '/': {
          hint: 'New content is available.',
          update: 'New content is available.',
        },
        /*{{@pwa_popup_content}}*/
      },
    }),
    searchPlugin({
      locales: {
        /*{{@pwa_search_content}}*/
      },
    }),
  ],
  theme: defaultTheme({
    locales: {
      /*{{@pwa_theme_config_content}}*/
    },
    navbar: false,
    sidebar: 'heading',
    sidebarDepth: 1,
    logo: '/assets/img/logo.svg',
    repo: 'https://github.com/FreezeYou/Website',
    repoLabel: 'GitHub',
    docsRepo: 'https://github.com/FreezeYou/Website',
    docsDir: 'docs',
    docsBranch: 'master',
    editLink: true,
    editLinkPattern: ':repo/edit/:branch/:path',
    contributors: false,
    lastUpdated: true,
    themePlugins: {
      activeHeaderLinks: true,
      backToTop: true,
    },
  }),
})

// Keep
function getGuideSidebar(guide, changelog, faq, api) {
  return [
    {
      text: guide,
      collapsible: true,
      children: [
        '../guide/',
        '../guide/warning.md',
        '../download/',
        '../guide/how-to-use.md',
        '../guide/enable-mroot.md',
        '../guide/schedules.md'
      ]
    },
    {
      text: faq,
      collapsible: true,
      children: [
        '../faq/',
        '../faq/mroot.md',
        '../faq/daily.md',
        '../faq/schedules.md'
      ]
    },
    {
      text: api,
      collapsible: true,
      children: [
        '../api/',
        '../api/uri.md',
        '../api/provider.md',
        '../api/start-activity.md'
      ]
    },
    {
      text: changelog,
      collapsible: true,
      children: [
        '../changelog/'
      ]
    }
  ]
}
