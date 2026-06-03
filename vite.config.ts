import { fileURLToPath } from 'url';
import { dirname, resolve } from 'node:path';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: 'project/src',
  base: './',
  publicDir: '../../public',
  envDir: '../../',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'project/src/index.html'),
        nested: resolve(__dirname, 'project/src/20251122reminise/index.html'),
        download: resolve(__dirname, 'project/src/20251122reminise/download.html'),
        reminiscence: resolve(__dirname, 'project/src/discography/Reminiscence.html'),
        lobelia: resolve(__dirname, 'project/src/discography/Lobelia.html'),
        Angraecum: resolve(__dirname, 'project/src/discography/Angraecum.html'),
      },
    },
  },
});
