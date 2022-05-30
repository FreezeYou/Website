const { defaultTheme } = require('vuepress')
const { pwaPlugin } = require('@vuepress/plugin-pwa')
const { pwaPopupPlugin } = require('@vuepress/plugin-pwa-popup')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
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
  plugins: [
    pwaPlugin(
        {
            serviceWorkerFilename: 'service-worker.js',
      }
    ),
    pwaPopupPlugin(
      {
        locales: {
          '/': {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
          /*{{@pwa_popup_content}}*/
        },
      },
    ),
    backToTopPlugin(),
    searchPlugin(
      {
        locales: {
          /*{{@pwa_search_content}}*/
        },
      },
    ),
  ],
  theme: defaultTheme({
    locales: {
      /*{{@pwa_theme_config_content}}*/
    },
    navbar: false,
    sidebar: 'auto',
    sidebarDepth: 1,
    displayAllHeaders: true,
    activeHeaderLinks: true,
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
    smoothScroll: true,
    nextLinks: true,
    prevLinks: true,
    search: true,
    searchMaxSuggestions: 10
  })
}

// Keep
function getGuideSidebar(guide, changelog, faq, api) {
  return [
    {
      isGroup: true,
      text: guide,
      collapsable: true,
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
      isGroup: true,
      text: faq,
      collapsable: true,
      children: [
        '../faq/',
        '../faq/mroot.md',
        '../faq/daily.md',
        '../faq/schedules.md'
      ]
    },
    {
      isGroup: true,
      text: api,
      collapsable: true,
      children: [
        '../api/',
        '../api/uri.md',
        '../api/provider.md',
        '../api/start-activity.md'
      ]
    },
    {
      isGroup: true,
      text: changelog,
      collapsable: true,
      children: [
        '../changelog/'
      ]
    }
  ]
}
