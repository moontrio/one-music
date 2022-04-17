import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import WindiCss from 'vite-plugin-windicss'
import importToCDN from 'vite-plugin-cdn-import'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    reactRefresh(),
    WindiCss(),
    importToCDN({
      modules: [{
        name: 'iconfont',
        var: 'iconfont',
        path: '//',
        // path: '//at.alicdn.com/t/font_2811059_y5jx0ih8yba.css',
        css: '//at.alicdn.com/t/font_2811059_lxz3vk7rd2.css',
      }],
    }),
  ],
  server: {
    proxy: {
      // '/api': {
      //   target: 'https://music.163.com/api/',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''),
      //   headers: {
      //     ReferenceError: 'http://music.163.com',
      //     origin: 'http://music.163.com',
      //   }
      // }
      '/api': {
        target: 'http://localhost:4000',
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
