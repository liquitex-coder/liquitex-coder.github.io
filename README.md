# liquitex-coder.github.io

案件獲得用のポートフォリオサイト / Freelance portfolio site.
公開URL: **https://liquitex-coder.github.io/**

AI・機械学習・Web開発を軸に、ビジネスの成果に直結するプロダクトづくりを紹介する
日英バイリンガルの静的サイトです。ビルド不要（純粋な HTML / CSS / JS）で、
GitHub Pages にそのまま配信されます。

## 構成 / Structure

```
index.html        トップページ（全セクション）
css/style.css     スタイル（ダークテーマ・レスポンシブ）
js/i18n.js        日英の辞書と言語切替ロジック
js/projects.js    掲載プロジェクトのデータと描画
js/main.js        ナビ・フィルタ・スクロール演出・問い合わせフォーム
assets/favicon.svg  ファビコン
.nojekyll         Jekyll 処理を無効化（静的配信）
```

## 公開する / Deploy

GitHub Pages の **Settings → Pages** で、Source を `main` ブランチ（ルート）に
設定してください。`liquitex-coder.github.io` というリポジトリ名のため、
URL は `https://liquitex-coder.github.io/` になります。

## カスタマイズ / Customize

- **文言の編集**: `js/i18n.js` の `ja` / `en` 辞書を編集すると両言語に反映されます。
- **実績の追加・編集**: `js/projects.js` の `PROJECTS` 配列にカードを追加。
  `cat` は `ai` / `ml` / `web` のいずれか（フィルタと色に対応）。
- **問い合わせフォーム**: 既定では送信時にメールクライアントが開く
  フォールバックが動作します。常時メール送信にするには:
  1. https://formspree.io で無料登録し、フォームを作成
  2. 発行されたエンドポイント `https://formspree.io/f/xxxxxxx` を取得
  3. `index.html` の `<form id="contactForm" action="...">` の
     `YOUR_FORM_ID` を実際のフォームIDに差し替え

## ローカル確認 / Local preview

```bash
python3 -m http.server 8000   # http://localhost:8000 を開く
```
