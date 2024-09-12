import { defineConfig } from 'vite';
import * as path from 'path';

import vue from '@vitejs/plugin-vue';
import dsv from '@rollup/plugin-dsv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dsv()],
  build: {
    outDir: './dist',
    emptyOutDir: true, // also necessary
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
