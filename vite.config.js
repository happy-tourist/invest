import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  // works on both development and production build environments
  esbuild: {
    // configure this value when the browser version of the development environment is lower
    // minimum support es2015
    // https://esbuild.github.io/api/#target
    target: 'es2015',
  },
  // for production build environments only
  build: {
    // minimum support es2015
    target: 'es2015',
  },
  base: './',
  plugins: [
      vue(),
    legacy({
      targets: ['chrome >= 50'],
      renderLegacyChunks: true,
      modernPolyfills: true,
    }),
  ],
})
