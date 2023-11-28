import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
export default defineConfig({
  title: 'WeyUI官网',
  description: '基于Element-plus基础组件封装使用',
  lang: 'cn-ZH',
  lastUpdated: true,
  base: '/WeyUI/',
  themeConfig: {
    // @ts-ignore
    appearance: false,
    logo: '/img/logo-md.png',
    siteTitle: 'WeyUI文档',
    outlineTitle: '目录',
    outline: 3,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yaoyaochil/WeyUI' },
    ],
    nav: [
      {
        text: '安装指南',
        link: '/components/',
      },
      { text: '基础组件', link: '/components/WCustomMenu/base.md' },
      {
        text: 'GitHub地址',
        link: 'https://github.com/yaoyaochil/WeyUI',
      },
      {
        text: '博客',
        link: 'https://moonwife.top',
      },
    ],
    sidebar: {
      '/components': [
        {
          text: '微信组件',
          items: [
            {
              text: '公众号',
              items: [
                { text: '自定义菜单', link: '/components/WCustomMenu/base.md' },
                { text: '素材管理', link: '/components/WMedia/base.md' },
              ]
            },
            {
              text: '企业微信组件',
              items: [
                {
                  text: '组织架构', link: '/components/WOrganization/base.md'
                }
              ]
            }
          ]
        },
        {
          text: '基础组件',
          items: [
            { text: '按钮', link: '/components/WButton/base.md' },
            { text: '图标', link: '/components/WIcon/base.md' },
            { text: '布局', link: '/components/WLayout/base.md' },
            { text: '空状态', link: '/components/WEmpty/base.md' },
            { text: '加载', link: '/components/WLoading/base.md' },
            { text: '弹窗', link: '/components/WDialog/base.md' },
            { text: '抽屉', link: '/components/WDrawer/base.md' },
            ]
        }
      ],
    },
  },
  appearance: false,
  markdown: {
    headers: {
      level: [0, 0],
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    config: (md) => mdPlugin(md),
  },
})
