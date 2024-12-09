import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  // works on both development and production build environments
  esbuild: {
    // configure this value when the browser version of the development environment is lower
    // minimum support es2015
    // https://esbuild.github.io/api/#target
    target: 'es5',
  },
  // for production build environments only
  build: {
    target: 'es5',
    polyfillDynamicImport: true,
    rollupOptions: {
      output: {
        format: 'iife', // Используем IIFE для лучшей поддержки устаревших браузеров
      }
    }
  },
  plugins: [
    vue(),
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
