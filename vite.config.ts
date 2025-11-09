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
        nested: resolve(__dirname, 'project/src/20251122reminise/index.html'),
      },
    },
  },
});
