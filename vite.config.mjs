import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  base: './',
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib.js'),
      name: 'VueBarGraph',
      fileName: (format) => `vue-bar-graph.${format}.js`,
      formats: ['esm', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        minifyInternalExports: false,
        assetFileNames: '[name][extname]',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
  ],
});
