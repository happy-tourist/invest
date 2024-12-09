import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
      vue(),
    legacy({
      targets: ['iOS 9'], // Таргетируем iOS 9
      modernPolyfills: true, // Включаем современные полифиллы
    }),
  ],
})
