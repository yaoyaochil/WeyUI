import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'vite-plugin-vue-setup-extend' // 设置neme属性
export default defineConfig({
  plugins: [
    vueJsx(),
    vueSetupExtend(),
  ],
  server: {
    host: '0.0.0.0',
    port: 2222,
    open: false,
    https: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5100',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    chunkSizeWarningLimit: 3000 // 以字节为单位的新大小限制
  },
  ssr: {
    noExternal: ['@arco-design/web-vue','scroll-into-view-if-needed'],
  }
})
