# AGENT.md

このディレクトリ内の HTML は、`project/src/Templete/Template.html` をテンプレートとして使用して実装します。

## 実装ルール

- 新規作成・再作成する Discography HTML は、`project/src/Templete/Template.html` の構造をベースにします。
- `head` はテンプレートの内容をそのまま使用します。
- `body` 内のタグ構造と属性名はテンプレートと同一にします。
- ページごとの差し替えは、テンプレート内の変数に対して KEY=VALUE 方式で管理します。
- VALUE に `{NULL}` を定義した場合は、テンプレート上でその変数が含まれるタグに `hidden` 属性を付与して非表示にします。
- `IMAGE_FILE_NAME`、`TITLE`、`EVENT_DATE_AND_NAME`、`PRICE` の VALUE に `{NULL}` を定義してはいけません。
- HTML 生成の指示を受けた場合は、対象ファイルの段落に `IMAGE_FILE_NAME`、`TITLE`、`EVENT_DATE_AND_NAME`、`PRICE` がすべて記載されていることを先に確認します。未記載または `{NULL}` の場合は生成を STOP し、警告してください。
- `discography/*.html` は `vite.config.ts` により自動で build input に含まれるため、個別に input 追加しません。

## 変数

- IMAGE_FILE_NAME=ジャケット画像ファイル名
- TITLE=作品タイトル
- EVENT_DATE_AND_NAME=頒布日とイベント名
- PRICE=頒布価格
- SHOP_URL=委託・頒布ページの URL
- SHOP_LINK_TEXT=リンク表示文言

VALUE には通常の文字列・文章・URL を指定します。`{NULL}` を指定した場合、その変数を含むタグは `hidden` 属性で非表示にします。
ただし、`IMAGE_FILE_NAME`、`TITLE`、`EVENT_DATE_AND_NAME`、`PRICE` は人間が記載すべき必須定義のため、`{NULL}` の指定を禁止します。

## Angraecum.html

- IMAGE_FILE_NAME=Angraecum.png
- TITLE=Angraecum
- EVENT_DATE_AND_NAME=2024.6.1(土) 科学世紀 魅知の旅
- PRICE=￥1000
- SHOP_URL=https://www.melonbooks.co.jp/detail/detail.php?product_id=2566953
- SHOP_LINK_TEXT=委託（メロンブックス）

## Lobelia.html

- IMAGE_FILE_NAME=Lobelia.jpg
- TITLE=Lobelia
- EVENT_DATE_AND_NAME=2024.9.13(日) 科学世紀のカフェテラス
- PRICE=￥1000
- SHOP_URL=https://www.melonbooks.co.jp/detail/detail.php?product_id=2566954
- SHOP_LINK_TEXT=委託（メロンブックス）

## Reminiscence.html

- IMAGE_FILE_NAME=Reminiscence.webp
- TITLE=Reminiscence
- EVENT_DATE_AND_NAME=2025.11.22(土) 科学世紀のカフェテラス
- PRICE=￥1000
- SHOP_URL=https://www.melonbooks.co.jp/detail/detail.php?product_id=3305530
- SHOP_LINK_TEXT=委託（メロンブックス）

## kagaribi.html

- IMAGE_FILE_NAME=kagaribi.jpeg
- TITLE=燎
- EVENT_DATE_AND_NAME=2024.12.31(火) コミックマーケット C105
- PRICE=￥1000
- SHOP_URL=https://www.melonbooks.co.jp/detail/detail.php?product_id=2741047
- SHOP_LINK_TEXT=委託（メロンブックス）

## 注意事項

- 現在の `Reminiscence.html` には、テンプレートに存在しない YouTube iframe の試聴行があります。
- テンプレート準拠で HTML を再作成する場合、この追加行は含めません。
- 試聴行を共通仕様にする場合は、先に `project/src/Templete/Template.html` に変数とタグ構造を追加してから、この AGENT.md に KEY=VALUE を追記してください。
