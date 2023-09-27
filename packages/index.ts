/* eslint-disable */

/**
 *
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { WOffiAccountMenuPlugin } from './WOffiAccountMenu';
const ComponentsPlugin: Plugin = {
  install(app: App) {
    WOffiAccountMenuPlugin.install?.(app);
  },
};

export default ComponentsPlugin;

export * from './WOffiAccountMenu'
