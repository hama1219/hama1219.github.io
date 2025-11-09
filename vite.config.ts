import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root:'project', //プロジェクトフォルダをproject二設定
  base: './', // アセットパスを相対パスにする
   publicDir: 'public',
   envDir: '../',
     build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'project/index.html'),
        nested: resolve(__dirname, 'project/20251122reminise/index.html'),
        download: resolve(__dirname, 'project/20251122reminise/download.html'),
        reminiscence: resolve(__dirname, 'project/discography/Reminiscence.html'),
        lobelia: resolve(__dirname, 'project/discography/Lobelia.html'),
      },
    },
  },
});
