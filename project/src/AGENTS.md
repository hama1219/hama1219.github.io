# AGENTS.md

このファイルは、`project/src/` 配下のリソースを変更する際の実装ルールをまとめたものです。

## プロジェクト構成

- このディレクトリは Vite の root です。HTML のエントリーファイルは `project/src/` を基準に配信・ビルドされます。
- 共通のブラウザ向け初期化処理は `main.ts` にあります。
- 共通スタイルは `style.css` にあり、`<script type="module" src="/main.ts"></script>` 経由で読み込まれます。
- ページで利用する画像アセットは `assets/` に配置します。
- Discography ページは `discography/` に配置します。
- イベント固有ページは `20251122reminise/` のような日付付きディレクトリに配置します。

## HTML ページ

- 明確にクライアントサイド処理が必要な場合を除き、ページは静的 HTML として作成します。
- 共通フォント、favicon、ブラウザ判定、共通 CSS を適用するページでは、次の shared module を読み込みます。

  ```html
  <script type="module" src="/main.ts"></script>
  ```

- Discography 系ページでは、現在のページ構造に合わせます。
  - `<div class="title">東方弦楽郷</div>`
  - `<hr class="header_line" />`
  - ジャケット画像を含む `.new_release_img`
  - 頒布情報の table を含む `.new_release_info_table`
- 内容そのものを変更する場合を除き、既存の日本語表示や円価格の表記を維持します。
- 外部の頒布ページやメディアへのリンクは、既存ページと同様に `target="_blank"` を使用して構いません。

## アセット

- ページ画像は `assets/` に配置します。
- HTML ファイルからの相対パスで参照します。
  - `index.html` から参照する場合: `./assets/...`
  - `discography/*.html` などのネストしたページから参照する場合: `../assets/...`
- 実際の画像アセットを差し替える場合を除き、既存の画像形式を維持します。

## Discography の input

- `discography/*.html` を `vite.config.ts` に 1 件ずつ手動追加しないでください。
- `vite.config.ts` は `project/src/discography/` 配下の `.html` ファイルを自動収集し、Rollup の input に含めます。
- 新しい Discography ページを追加する場合は、基本的に `.html` ファイルを `project/src/discography/` に配置するだけで対応できます。

## TypeScript

- `main.ts` は `/main.ts` を読み込むすべてのページで共有されます。
- 共有処理を変更する場合は、すべての HTML エントリーポイントとの互換性を維持します。
- `project/src/download/` 配下に配置した `.html` ファイルは、`discography/` 配下と同様に `vite.config.ts` で自動収集され、すべて build input に含まれます。
- 現在の主な役割は次のとおりです。
  - `style.css` の import
  - `favicon.ico` を使った favicon 設定
  - Adobe Typekit kit `top6hpz` の読み込み
  - Edge / Internet Explorer 系 user agent の場合にメッセージを表示し、Chrome へリダイレクト
- ページ固有の処理を `main.ts` に追加する場合は、無関係なページへ影響しないように条件分岐してください。

## CSS

- 新しい class を追加する前に、既存 class の再利用を検討します。
- 現在のレイアウトは、タイトル、ヘッダーライン、ジャケット画像、頒布情報テーブルに fixed position を使用しています。
- `body`、`a`、`.title`、`.new_release_img`、`.new_release_info_table` などの共有セレクターを変更すると、`/main.ts` を読み込む全ページに影響します。

## 検証

- このディレクトリ配下のリソースを変更した後は、production build を実行します。

  ```sh
  npm run build
  ```

- 期待する HTML ファイルが `dist/` 配下に出力されていることを確認します。特に `discography/` に新規追加した HTML が出力されることを確認してください。
