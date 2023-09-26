import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { vitePluginForArco } from '@arco-plugins/vite-vue'
import Markdown from 'vite-plugin-md';
import path from 'path';
// 文档: https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      packages: resolve(__dirname, '../packages'),

    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vitePluginForArco(),
    Markdown(),
  ],
});
