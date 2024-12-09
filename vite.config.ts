import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  // for production build environments only
  build: {
    target: 'es2015',
    polyfillDynamicImport: true,
    rollupOptions: {
      output: {
        format: 'iife', // Используем IIFE для лучшей поддержки устаревших браузеров
      }
    },
    sourcemap: true,
    minify: 'terser', // Используем terser вместо esbuild
    terserOptions: {
      ecma: 5, // Преобразуем до ES5 для совместимости с iOS 9.3.6
      compress: {
        drop_console: true, // Убираем console.log
        drop_debugger: true // Убираем debugger
      },
      output: {
        comments: false // Удаляем комментарии
      }
    }
  },
  plugins: [
    vue({
      reactivityTransform: true,  // Включаем reactivity-transform
    }),
    // for production build environments only
    legacy({
      /**
       * 1. try changing these values
       * 2. run `pnpm build`, see the output files in dist directory
       * 3. run `pnpm preview`, see the actual loaded files in different versions of browsers
       */
      targets: ['defaults', 'not IE 11', 'iOS >= 9'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'], // Для async/await
      renderLegacyChunks: true,
      modernPolyfills: true,
    }),
  ],
});
