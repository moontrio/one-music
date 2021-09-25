import { defineConfig } from 'vite'
import { resolve } from 'path'
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
        css: '//at.alicdn.com/t/font_2811059_y5jx0ih8yba.css',
      }],
    }),
  ]
})
