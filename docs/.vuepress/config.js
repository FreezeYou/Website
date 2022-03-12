module.exports = {
  title: '自冻 FreezeYou',
  description: '自冻 FreezeYou',
  locales: {
    
    '/en-US/': {
      lang: 'en-US',
      title: 'FreezeYou',
      description: 'FreezeYou'
    },

    '/ru-RU/': {
      lang: 'ru-RU',
      title: 'FreezeYou',
      description: 'FreezeYou'
    },

    '/ru-UA/': {
      lang: 'ru-UA',
      title: 'FreezeYou',
      description: 'FreezeYou'
    },

    '/zh-CN/': {
      lang: 'zh-CN',
      title: '自冻',
      description: '自冻'
    },

    '/zh-TW/': {
      lang: 'zh-TW',
      title: 'FreezeYou',
      description: 'FreezeYou'
    },

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
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    ['@vuepress/plugin-pwa'],
    [
      '@vuepress/plugin-pwa-popup',
      {
        locales: {
          '/': {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
          
          '/en-US/': {
            message: "New content is available.",
            buttonText: "Refresh",
          },

          '/ru-RU/': {
            message: "Доступно новое содержимое.",
            buttonText: "Обновить",
          },

          '/ru-UA/': {
            message: "Доступно новое содержимое.",
            buttonText: "Обновить",
          },

          '/zh-CN/': {
            message: "发现有内容更新",
            buttonText: "刷新",
          },

          '/zh-TW/': {
            message: "New content is available.",
            buttonText: "Refresh",
          },

        },
      },
    ],
    ['@vuepress/plugin-back-to-top'],
    [
      '@vuepress/plugin-search',
      {
        locales: {
          
          '/en-US/': {
            placeholder: 'Search',
          },

          '/ru-RU/': {
            placeholder: 'Поиск',
          },

          '/ru-UA/': {
            placeholder: 'Поиск',
          },

          '/zh-CN/': {
            placeholder: '搜索',
          },

          '/zh-TW/': {
            placeholder: '搜索',
          },

        },
      },
    ],
  ],
  themeConfig: {
    locales: {
      
      '/en-US/': {
        editLinkText: 'Edit this page',
        lastUpdatedText: 'Last Updated',
        selectLanguageText: 'Language',
        selectLanguageName: 'English (US)',
        navbar: [
          { text: 'Home', link: '/en-US/' },
          { text: 'Guide', link: '/en-US/guide/' },
          { text: 'Download', link: '/en-US/download/' },
          { text: 'FAQ', link: '/en-US/faq/' },
          { text: 'API', link: '/en-US/api/' },
          { text: 'Changelog', link: '/en-US/changelog/' },
          {
            text: 'More',
            children: [
              {
                text: 'About',
                children: [
                  { text: 'Contact Us', link: '/en-US/about/contactUs.md' },
                  { text: 'Special Thanks', link: '/en-US/thanks/' },
                  { text: 'Server Status', link: 'https://status.zidon.net' },
                  { text: 'GitHub Organization', link: 'https://github.com/FreezeYou/' },
                ],
              },
              {
                text: 'Link',
                children: [
                  { text: 'AutumnBox', link: 'https://atmb.top/?from=freezeyou' },
                  { text: 'Zidon.NET', link: 'https://www.zidon.net' },
                  { text: 'FreezeYou.NET', link: 'https://www.freezeyou.net' },
                  { text: 'xn--f8qp88i.COM', link: 'https://www.xn--f8qp88i.com/' },
                  { text: 'Old Site', link: 'https://freezeyou.playhi.net' },
                ],
              },
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
        backToHome: 'Take me home.',
        notFound: [
          `There's nothing here.`,
          `How did we get here?`,
          `That's a Four-Oh-Four.`,
          `Looks like we've got some broken links.`
        ],
      },

      '/ru-RU/': {
        editLinkText: 'Редактировать эту страницу',
        lastUpdatedText: 'Последнее изменение',
        selectLanguageText: 'Язык',
        selectLanguageName: 'В процессе',
        navbar: [
          { text: 'Главная', link: '/ru-RU/' },
          { text: 'Руководство', link: '/ru-RU/guide/' },
          { text: 'Загрузка', link: '/ru-RU/download/' },
          { text: 'ЧАВО', link: '/ru-RU/faq/' },
          { text: 'API', link: '/ru-RU/api/' },
          { text: 'Список изменений', link: '/ru-RU/changelog/' },
          {
            text: 'Дополнительно',
            children: [
              {
                text: 'О FreezeYou!',
                children: [
                  { text: 'Связаться с нами', link: '/ru-RU/about/contactUs.md' },
                  { text: 'Особые благодарности', link: '/ru-RU/thanks/' },
                  { text: 'Статус сервера', link: 'https://status.zidon.net' },
                  { text: 'Организация GitHub', link: 'https://github.com/FreezeYou/' },
                ],
              },
              {
                text: 'Ссылка',
                children: [
                  { text: 'AutumnBox', link: 'https://atmb.top/?from=freezeyou' },
                  { text: 'Zidon.NET', link: 'https://www.zidon.net' },
                  { text: 'FreezeYou.NET', link: 'https://www.freezeyou.net' },
                  { text: 'xn--f8qp88i.COM', link: 'https://www.xn--f8qp88i.com/' },
                  { text: 'Старый сайт', link: 'https://freezeyou.playhi.net' },
                ],
              },
            ],
          },
        ],
        sidebar: {
          '/ru-RU/guide/': getGuideSidebar('Руководство', 'Список изменений', 'ЧАВО', 'API'),
          '/ru-RU/download/': getGuideSidebar('Руководство', 'Список изменений', 'ЧАВО', 'API'),
          '/ru-RU/changelog/': getGuideSidebar('Руководство', 'Список изменений', 'ЧАВО', 'API'),
          '/ru-RU/api/': getGuideSidebar('Руководство', 'Список изменений', 'ЧАВО', 'API'),
          '/ru-RU/faq/': getGuideSidebar('Руководство', 'Список изменений', 'ЧАВО', 'API')
        },
        searchPlaceholder: 'Поиск',
        backToHome: 'Вернуться на главную.',
        notFound: [
          `Здесь ничего нет`,
          `Как вы сюда попали?`,
          `That's a Four-Oh-Four.`,
          `Похоже, у нас есть несколько ошибочных ссылок.`
        ],
      },

      '/ru-UA/': {
        editLinkText: 'Редактировать эту страницу',
        lastUpdatedText: 'Последнее изменение',
        selectLanguageText: 'Язык',
        selectLanguageName: 'В процессе',
        navbar: [
          { text: 'Главная', link: '/ru-UA/' },
          { text: 'Руководство', link: '/ru-UA/guide/' },
          { text: 'Загрузка', link: '/ru-UA/download/' },
          { text: 'ЧАВО', link: '/ru-UA/faq/' },
          { text: 'API', link: '/ru-UA/api/' },
          { text: 'Список изменений', link: '/ru-UA/changelog/' },
          {
            text: 'Дополнительно',
            children: [
              {
                text: 'О FreezeYou!',
                children: [
                  { text: 'Связаться с нами', link: '/ru-UA/about/contactUs.md' },
                  { text: 'Особые благодарности', link: '/ru-UA/thanks/' },
                  { text: 'Статус сервера', link: 'https://status.zidon.net' },
                  { text: 'Организация GitHub', link: 'https://github.com/FreezeYou/' },
                ],
              },
              {
                text: 'Ссылка',
                children: [
                  { text: 'AutumnBox', link: 'https://atmb.top/?from=freezeyou' },
                  { text: 'Zidon.NET', link: 'https://www.zidon.net' },
                  { text: 'FreezeYou.NET', link: 'https://www.freezeyou.net' },
                  { text: 'xn--f8qp88i.COM', link: 'https://www.xn--f8qp88i.com/' },
                  { text: 'Старый сайт', link: 'https://freezeyou.playhi.net' },
                ],
              },
            ],
          },
        ],
        sidebar: {
          '/ru-UA/guide/': getGuideSidebar('Руководство', 'Список изменений', 'ЧАВО', 'API'),
          '/ru-UA/download/': getGuideSidebar('Руководство', 'Список изменений', 'ЧАВО', 'API'),
          '/ru-UA/changelog/': getGuideSidebar('Руководство', 'Список изменений', 'ЧАВО', 'API'),
          '/ru-UA/api/': getGuideSidebar('Руководство', 'Список изменений', 'ЧАВО', 'API'),
          '/ru-UA/faq/': getGuideSidebar('Руководство', 'Список изменений', 'ЧАВО', 'API')
        },
        searchPlaceholder: 'Поиск',
        backToHome: 'Вернуться на главную.',
        notFound: [
          `Здесь ничего нет`,
          `Как вы сюда попали?`,
          `That's a Four-Oh-Four.`,
          `Похоже, у нас есть несколько ошибочных ссылок.`
        ],
      },

      '/zh-CN/': {
        editLinkText: '编辑此页',
        lastUpdatedText: '最后更新于',
        selectLanguageText: '语言',
        selectLanguageName: '中文（中国大陆）',
        navbar: [
          { text: '首页', link: '/zh-CN/' },
          { text: '开始', link: '/zh-CN/guide/' },
          { text: '下载', link: '/zh-CN/download/' },
          { text: 'FAQ', link: '/zh-CN/faq/' },
          { text: 'API', link: '/zh-CN/api/' },
          { text: '日志', link: '/zh-CN/changelog/' },
          {
            text: '更多',
            children: [
              {
                text: '关于自冻',
                children: [
                  { text: '联系我们', link: '/zh-CN/about/contactUs.md' },
                  { text: '特别感谢', link: '/zh-CN/thanks/' },
                  { text: '状态监控', link: 'https://status.zidon.net' },
                  { text: 'GitHub', link: 'https://github.com/FreezeYou/' },
                ],
              },
              {
                text: '友情链接',
                children: [
                  { text: '秋之盒', link: 'https://atmb.top/?from=freezeyou' },
                  { text: 'Zidon.NET', link: 'https://www.zidon.net' },
                  { text: 'FreezeYou.NET', link: 'https://www.freezeyou.net' },
                  { text: '自冻.COM', link: 'https://www.xn--f8qp88i.com/' },
                  { text: '旧版站点', link: 'https://freezeyou.playhi.net' },
                ],
              },
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
        backToHome: '返回首页',
        notFound: [
          `这里怎么空荡荡的？`,
          `咦，怎么到这里来了？`,
          `四零四了！`,
          `咦，这个页面跑丢了！`
        ],
      },

      '/zh-TW/': {
        editLinkText: '編輯此頁',
        lastUpdatedText: '最後更新于',
        selectLanguageText: '語言',
        selectLanguageName: '中文（中國臺灣）',
        navbar: [
          { text: '首頁', link: '/zh-TW/' },
          { text: 'Guide', link: '/zh-TW/guide/' },
          { text: '下載', link: '/zh-TW/download/' },
          { text: 'FAQ', link: '/zh-TW/faq/' },
          { text: 'API', link: '/zh-TW/api/' },
          { text: '記錄', link: '/zh-TW/changelog/' },
          {
            text: '更多',
            children: [
              {
                text: 'About',
                children: [
                  { text: '聯繫我們', link: '/zh-TW/about/contactUs.md' },
                  { text: 'Special Thanks', link: '/zh-TW/thanks/' },
                  { text: '伺服器狀態', link: 'https://status.zidon.net' },
                  { text: 'GitHub Organization', link: 'https://github.com/FreezeYou/' },
                ],
              },
              {
                text: '友情鏈接',
                children: [
                  { text: '秋之盒', link: 'https://atmb.top/?from=freezeyou' },
                  { text: 'Zidon.NET', link: 'https://www.zidon.net' },
                  { text: 'FreezeYou.NET', link: 'https://www.freezeyou.net' },
                  { text: '自凍.COM', link: 'https://www.xn--f8qp88i.com/' },
                  { text: 'Old Site', link: 'https://freezeyou.playhi.net' },
                ],
              },
            ],
          },
        ],
        sidebar: {
          '/zh-TW/guide/': getGuideSidebar('Guide', '變更記錄', 'FAQ', 'API'),
          '/zh-TW/download/': getGuideSidebar('Guide', '變更記錄', 'FAQ', 'API'),
          '/zh-TW/changelog/': getGuideSidebar('Guide', '變更記錄', 'FAQ', 'API'),
          '/zh-TW/api/': getGuideSidebar('Guide', '變更記錄', 'FAQ', 'API'),
          '/zh-TW/faq/': getGuideSidebar('Guide', '變更記錄', 'FAQ', 'API')
        },
        searchPlaceholder: '搜索',
        backToHome: '回到首頁',
        notFound: [
          `There's nothing here.`,
          `How did we get here?`,
          `That's a Four-Oh-Four.`,
          `Looks like we've got some broken links.`
        ],
      },

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
  }
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
