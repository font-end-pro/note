import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import autoImport from 'unplugin-auto-import/dist/vite.js'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // autoImport({
    //   imports: ['vue', 'vue-router'],
    //   eslintrc: {
    //     enabled: true,
    //   },
    //   dirs: ['./src/components', './src/composables'],
    // }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
