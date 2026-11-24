import { defineConfig } from 'vite';

export default defineConfig({
  root: 'app',
  base: './',
  build: {
    outDir: '..',
    emptyOutDir: false,
    assetsDir: 'assets',
  },
});
