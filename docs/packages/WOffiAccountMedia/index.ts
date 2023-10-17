import { App, Plugin } from 'vue';
import WOffiAccountMedia from './src/index.vue';

export const WOffiAccountMediaPlugin: Plugin = {
  install(app: App) {
    app.component('woffi-account-media', WOffiAccountMedia);
  },
};

export {
  WOffiAccountMedia,
};
