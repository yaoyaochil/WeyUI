import { App, Plugin } from 'vue';
import CustomMedia from './src/index.vue';

export const CustomMediaPlugin: Plugin = {
  install(app: App) {
    app.component('custom-media', CustomMedia);
  },
};

export {
  CustomMedia,
};
