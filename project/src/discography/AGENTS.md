# AGENTS.md

このディレクトリ内の Discography HTML は、`project/src/Templete/Template.html` をテンプレートとして使用して実装します。

## 実装ルール

- 新規作成・再作成する Discography HTML は、`project/src/Templete/Template.html` の構造をベースにします。
- `head` はテンプレートの内容をそのまま使用します。
- `body` 内のタグ構造と属性名はテンプレートと同一にします。
- ページごとの差し替え値は、`title/` 配下の Markdown ファイルに KEY=VALUE 形式で管理します。
- HTML ファイルごとに、拡張子を除いたファイル名と同名の `title/*.md` を参照します。
  - 例: `Angraecum.html` の定義情報は `title/Angraecum.md` を参照します。
- VALUE に `{NULL}` を定義した場合は、テンプレート上でその変数が含まれるタグに `hidden` 属性を付与して非表示にします。
- `TRACK_TITLE_{Number}` と `TRACK_SOURCE_{Number}` の `{Number}` には数値が入ります。例えば `TRACK_TITLE_1` が定義されている場合は、HTML 内の `TRACK_TITLE_1` の値を差し替えます。
- `project/src/Templete/Template.html` には `Number=1` のソースのみ存在します。`Number` に `2` 以上の数値が定義されている場合は、対応する変数の `table_inner_track_list_{Number}` クラスを持つタグ一式を追加し、値を差し替えます。
- トラック行に `tr_number` クラスのタグが存在する場合は、`Number` と同じ数値で `Tr.{Number}` を設定します。例えば `table_inner_track_list_2` では `Tr.2` とします。
- `TRACK_TITLE_{Number}` または `TRACK_SOURCE_{Number}` が定義されていない場合は、対応する `track_number_list_{Number}` タグ一式に `hidden` 属性を追加して非表示にします。
- `IMAGE_FILE_NAME`、`TITLE`、`EVENT_DATE_AND_NAME`、`PRICE` の VALUE に `{NULL}` を定義してはいけません。
- HTML 生成の指示を受けた場合は、対象ファイルに対応する `title/*.md` に `IMAGE_FILE_NAME`、`TITLE`、`EVENT_DATE_AND_NAME`、`PRICE` がすべて記載されていることを先に確認します。未記載または `{NULL}` の場合は生成を STOP し、警告してください。
- `discography/*.html` は `vite.config.ts` により自動で build input に含まれるため、個別に input 追加しません。

## 変数

- IMAGE_FILE_NAME=ジャケット画像ファイル名
- TITLE=作品タイトル
- EVENT_DATE_AND_NAME=頒布日とイベント名
- PRICE=頒布価格
- SHOP_URL=委託・頒布ページの URL
- SHOP_LINK_TEXT=リンク表示文言
- TRACK_TITLE_{Number}={Number}曲目の楽曲名
- TRACK_SOURCE_{Number}={Number}曲目の出典・原曲名

VALUE には通常の文字列・文章・URL を指定します。`{NULL}` を指定した場合、その変数を含むタグは `hidden` 属性で非表示にします。
ただし、`IMAGE_FILE_NAME`、`TITLE`、`EVENT_DATE_AND_NAME`、`PRICE` は人間が記載すべき必須定義のため、`{NULL}` の指定を禁止します。

## 定義ファイル

- `title/Angraecum.md`
- `title/Lobelia.md`
- `title/Reminiscence.md`
- `title/kagaribi.md`

## 注意事項

- 現在の `Reminiscence.html` には、テンプレートに存在しない YouTube iframe の試聴行があります。
- テンプレート準拠で HTML を再作成する場合、この追加行は含めません。
- 試聴行を共通仕様にする場合は、先に `project/src/Templete/Template.html` に変数とタグ構造を追加してから、対応する `title/*.md` に KEY=VALUE を追記してください。
