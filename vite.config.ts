import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import importToCDN from 'vite-plugin-cdn-import'

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: {
  //     'iconfont': 'https://at.alicdn.com/t/font_2811059_y5jx0ih8yba.css',
  //   },
  // },
  plugins: [
    reactRefresh(),
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
