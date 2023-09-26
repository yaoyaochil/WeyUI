import { App, Plugin } from 'vue';
import CustomMenu from './src/index.vue';
export const CustomMenuPlugin: Plugin = {
  install(app: App) {
    app.component('custom-menu', CustomMenu);
  },
};

export {
  CustomMenu,
};
