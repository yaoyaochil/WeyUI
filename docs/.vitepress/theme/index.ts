import DefaultTheme from 'vitepress/theme'
import { EnhanceAppContext } from "vitepress";
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
import { VPDemo } from '../vitepress'
import './style/global.css'
// 注册组件库
import WeyUI from '../../../packages'
import '../../public/css/index.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx:EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx)
    // @ts-ignore
    ctx.app.use(ArcoVue,{
      componentPrefix: 'w',
    })
    // 注册所有图标
    for (const [key, component] of Object.entries(ArcoVueIcon)) {
      ctx.app.component(key, component)
    }
    // 全局注册基础组件
    // @ts-ignore
    ctx.app.use(WeyUI)

    ctx.app.component('Demo', VPDemo)
  },
}
