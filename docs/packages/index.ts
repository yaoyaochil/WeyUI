/* eslint-disable */

/**
 * !--------- FBI WARNING ----------!
 *
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { CustomMenuPlugin } from './CustomMenu';
import { CustomMediaPlugin } from './CustomMedia';

const ComponentsPlugin: Plugin = {
  install(app: App) {
    CustomMenuPlugin.install?.(app);
    CustomMediaPlugin.install?.(app);
  },
};

export default ComponentsPlugin;

export * from './CustomMenu'
export * from './CustomMedia'
