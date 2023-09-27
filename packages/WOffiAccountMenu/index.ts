import { App, Plugin } from 'vue';
import WOffiAccountMenu from './src/index.vue';
export const WOffiAccountMenuPlugin: Plugin = {
  install(app: App) {
    app.component('w-offiaccount-menu', WOffiAccountMenu);
  },
};
export {
  WOffiAccountMenu,
};
