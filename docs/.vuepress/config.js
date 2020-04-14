module.exports = {
  title: '自冻 FreezeYou',
  description: '自冻 FreezeYou',
  locales: {
    '/zh-CN/': {
      lang: 'zh-CN',
      title: '自冻',
      description: '自冻'
    },
    '/en-US/': {
      lang: 'en-US',
      title: 'FreezeYou',
      description: 'FreezeYou!'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/assets/img/logo.svg' }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    locales: {
      '/zh-CN/': {
        editLinkText: '编辑此页',
        lastUpdated: '最后更新于',
        repoLabel: '查看源文件',
        selectText: '语言',
        label: '简体中文(中国大陆)',
        nav: [
          { text: '首页', link: '/zh-CN/' },
          { text: '开始', link: '/zh-CN/guide/' },
          { text: '下载', link: '/zh-CN/download/' },
          { text: '日志', link: '/zh-CN/changelog/' },
          { text: 'FAQ', link: '/zh-CN/faq/' },
          { text: 'API', link: '/zh-CN/api/' },
          {
            text: '链接',
            ariaLabel: '友情链接',
            items: [
              { text: 'FreezeYou', link: 'https://freezeyou.playhi.net' },
              { text: '秋之盒', link: 'https://atmb.top/?from=freezeyou' },
            ],
          },
        ],
        sidebar: {
          '/zh-CN/guide/': getGuideSidebar('开始', '更新日志', 'FAQ', 'API'),
          '/zh-CN/download/': getGuideSidebar('开始', '更新日志', 'FAQ', 'API'),
          '/zh-CN/changelog/': getGuideSidebar('开始', '更新日志', 'FAQ', 'API'),
          '/zh-CN/api/': getGuideSidebar('开始', '更新日志', 'FAQ', 'API'),
          '/zh-CN/faq/': getGuideSidebar('开始', '更新日志', 'FAQ', 'API')
        },
        searchPlaceholder: '搜索',
        notFoundLinkText: '返回首页',
        notFoundMessages: [
          `这里怎么空荡荡的？`,
          `咦，怎么到这里来了？`,
          `四零四了！`,
          `咦，这个页面跑丢了！`
        ]
      },
      '/en-US/': {
        editLinkText: 'Edit this page',
        lastUpdated: 'Last Updated',
        repoLabel: 'View Source',
        selectText: 'Language',
        label: 'English(US)',
        nav: [
          { text: 'Home', link: '/en-US/' },
          { text: 'Guide', link: '/en-US/guide/' },
          { text: 'Download', link: '/en-US/download/' },
          { text: 'Changelog', link: '/en-US/changelog/' },
          { text: 'FAQ', link: '/en-US/faq/' },
          { text: 'API', link: '/en-US/api/' },
          {
            text: 'Link',
            ariaLabel: 'Link Menu',
            items: [
              { text: 'FreezeYou', link: 'https://freezeyou.playhi.net' },
              { text: 'AutumnBox', link: 'https://atmb.top/?from=freezeyou' },
            ],
          },
        ],
        sidebar: {
          '/en-US/guide/': getGuideSidebar('Guide', 'Changelog', 'FAQ', 'API'),
          '/en-US/download/': getGuideSidebar('Guide', 'Changelog', 'FAQ', 'API'),
          '/en-US/changelog/': getGuideSidebar('Guide', 'Changelog', 'FAQ', 'API'),
          '/en-US/api/': getGuideSidebar('Guide', 'Changelog', 'FAQ', 'API'),
          '/en-US/faq/': getGuideSidebar('Guide', 'Changelog', 'FAQ', 'API')
        },
        searchPlaceholder: 'Search',
        notFoundLinkText: 'Take me home.',
        notFoundMessages: [
          `There's nothing here.`,
          `How did we get here?`,
          `That's a Four-Oh-Four.`,
          `Looks like we've got some broken links.`
        ],
      },
    },
    navbar: true,
    sidebar: 'auto',
    sidebarDepth: 1,
    displayAllHeaders: true,
    activeHeaderLinks: true,
    logo: '/assets/img/logo.svg',
    repo: 'https://github.com/FreezeYou/Website',
    docsRepo: 'https://github.com/FreezeYou/Website',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    smoothScroll: true,
    nextLinks: true,
    prevLinks: true,
    search: true,
    searchMaxSuggestions: 10
  }
}

function getGuideSidebar(guide, changelog, faq, api) {
  return [
    {
      title: guide,
      collapsable: true,
      children: [
        '../guide/',
        '../guide/warning',
        '../download/',
        '../guide/how-to-use',
        '../guide/enable-mroot',
        '../guide/schedules'
      ]
    },
    {
      title: faq,
      collapsable: true,
      children: [
        '../faq/',
        '../faq/mroot',
        '../faq/daily',
        '../faq/schedules'
      ]
    },
    {
      title: api,
      collapsable: true,
      children: [
        '../api/',
        '../api/uri',
        '../api/provider',
        '../api/start-activity'
      ]
    },
    {
      title: changelog,
      collapsable: true,
      children: [
        '../changelog/'
      ]
    }
  ]
}
