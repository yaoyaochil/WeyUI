/* eslint-disable */

/**
 * !--------- FBI WARNING ----------!
 *
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';
import '@arco-design/web-vue/dist/arco.css';

import { WOffiAccountMenuPlugin } from './WOffiAccountMenu';
import { WOffiAccountMediaPlugin } from './WOffiAccountMedia';

const MYKitPlugin: Plugin = {
  install(app: App) {
    WOffiAccountMenuPlugin.install?.(app);
    WOffiAccountMediaPlugin.install?.(app);
  },
};

export default MYKitPlugin;

export * from './WOffiAccountMenu'
export * from './WOffiAccountMedia'
