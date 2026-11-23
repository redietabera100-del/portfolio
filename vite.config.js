import { defineConfig } from 'vite';

export default defineConfig({
  root: 'app',
  build: {
    outDir: '..',
    emptyOutDir: false,
    assetsDir: 'assets',
  },
});
