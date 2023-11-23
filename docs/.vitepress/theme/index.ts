import DefaultTheme from 'vitepress/theme'

import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
// 图标并进行全局注册
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import { VPDemo } from '../vitepress'
import './style/global.css'
// 注册组件库
import WeyUI from '../../../packages'
import '../../public/css/index.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    // 注册ElementPlus
    // ctx.app.use(ElementPlus, {
    //   locale, // 语言设置
    // })
    ctx.app.use(ArcoVue,{
      componentPrefix: 'w',
    })
    // 注册所有图标
    for (const [key, component] of Object.entries(ArcoVueIcon)) {
      ctx.app.component(key, component)
    }
    // 全局注册基础组件
    ctx.app.use(WeyUI)

    ctx.app.component('Demo', VPDemo)
  },
}
