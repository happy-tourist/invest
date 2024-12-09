import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: ['es2015'], // Поддержка iOS 9 (Safari 9)
    minify: 'terser', // Минимизатор Terser
    terserOptions: {
      ecma: 5, // Поддержка старых браузеров
      compress: {
        drop_console: true, // Удалить все console.log
        drop_debugger: true // Удалить все debugger
      },
      output: {
        comments: false, // Удалить все комментарии
      }
    }
  },
  base: './',
  plugins: [
      vue(),
    legacy({
      targets: ['iOS >= 9'],
      renderLegacyChunks: true,
      modernPolyfills: true,
    }),
  ],
})
