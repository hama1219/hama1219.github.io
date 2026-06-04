# AGENT.md

このディレクトリ内の HTML は、`project/src/Templete/Template.html` をテンプレートとして使用して実装します。

## 実装ルール

- 新規作成・再作成する Discography HTML は、`project/src/Templete/Template.html` の構造をベースにします。
- `head` はテンプレートの内容をそのまま使用します。
- `body` 内のタグ構造と属性名はテンプレートと同一にします。
- ページごとの差し替えは、テンプレート内の変数に対して KEY=VALUE 方式で管理します。
- `discography/*.html` は `vite.config.ts` により自動で build input に含まれるため、個別に input 追加しません。

## 変数

- IMAGE_FILE_NAME=ジャケット画像ファイル名
- TITLE=作品タイトル
- EVENT_DATE_AND_NAME=頒布日とイベント名
- PRICE=頒布価格
- SHOP_URL=委託・頒布ページの URL
- SHOP_LINK_TEXT=リンク表示文言

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

## 注意事項

- 現在の `Reminiscence.html` には、テンプレートに存在しない YouTube iframe の試聴行があります。
- テンプレート準拠で HTML を再作成する場合、この追加行は含めません。
- 試聴行を共通仕様にする場合は、先に `project/src/Templete/Template.html` に変数とタグ構造を追加してから、この AGENT.md に KEY=VALUE を追記してください。
