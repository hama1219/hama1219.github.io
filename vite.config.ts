import { fileURLToPath } from 'url';
import { readdirSync } from 'node:fs';
import { dirname, extname, join, relative, resolve, sep } from 'node:path';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = resolve(__dirname, 'project/src');
const discographyDir = resolve(srcDir, 'discography');
const downloadDir = resolve(srcDir, 'download');

const getHtmlInputs = (dir: string, inputRoot = dir, inputPrefix = '') =>
  Object.fromEntries(
    readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const entryPath = join(dir, entry.name);

      if (entry.isDirectory()) {
        return Object.entries(getHtmlInputs(entryPath, inputRoot, inputPrefix));
      }

      if (!entry.isFile() || extname(entry.name) !== '.html') {
        return [];
      }

      const inputName = relative(inputRoot, entryPath)
        .replace(new RegExp(`${extname(entry.name)}$`), '')
        .split(sep)
        .join('/');

      return [[`${inputPrefix}${inputName}`, entryPath]];
    }),
  );

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
        main: resolve(srcDir, 'index.html'),
        discographyIndex: resolve(srcDir, 'Discography.html'),
        nested: resolve(srcDir, '20251122reminise/index.html'),
        download: resolve(srcDir, '20251122reminise/download.html'),
        ...getHtmlInputs(discographyDir, discographyDir, 'discography/'),
        ...getHtmlInputs(downloadDir, downloadDir, 'download/'),
      },
    },
  },
});
