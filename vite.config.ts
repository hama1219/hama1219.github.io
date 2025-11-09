import { defineConfig } from 'vite';
export default defineConfig({
  root:'project', //プロジェクトフォルダをproject二設定
  base: './', // アセットパスを相対パスにする
   publicDir: 'public',
   envDir: '../',
});
