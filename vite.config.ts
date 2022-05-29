import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import WindiCss from 'vite-plugin-windicss'
import importToCDN from 'vite-plugin-cdn-import'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    reactRefresh(),
    WindiCss(),
    svgr(),
    importToCDN({
      modules: [{
        name: 'iconfont',
        var: 'iconfont',
        path: '//',
        css: '//at.alicdn.com/t/font_2811059_8z29k3bh20u.css',
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
