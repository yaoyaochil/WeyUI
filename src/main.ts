import { createApp } from 'vue'
import '@arco-design/web-vue/dist/arco.css';
import App from './App.vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import router from './router'
import './assets/markdown.css';
import ComponentsPlugin from '../packages';
import Preview from './components/Preview.vue';

const app = createApp(App)
app.component('Preview', Preview)
app.use(ComponentsPlugin).use(router).mount('#app')
