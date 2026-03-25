# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

- HTML Reports (HTML帳票)をReactコンポーネントとして作成・管理するリポジトリ
- ブラウザで表示し、PDF出力することを前提としている

## Tech Stack

- React 19 + TypeScript + Vite
- paper-css
- CSS

## Commands

- `npm install` — 依存パッケージのインストール
- `npm run dev` — 開発サーバー起動
- `npm run build` — ビルド（tsc + vite build）
- `npm run lint` — ESLint実行

## 帳票コンポーネントの構成ルール

### ディレクトリ構造

各帳票は `src/components/{ReportName}/` に以下のファイルを配置する：

```
src/components/{ReportName}/
├── {ReportName}.tsx    # エントリポイント（CSSのimportとPageの集約）
├── {ReportName}.css    # 帳票固有のスタイル
├── Page1.tsx           # 1ページ目のコンテンツ
├── Page2.tsx           # 2ページ目（必要に応じて）
└── ...
```

### エントリポイント（{ReportName}.tsx）

- CSSファイルのimportを行う
- 各Pageコンポーネントを順番にレンダリングする
- ロジックは持たない

```tsx
import './{ReportName}.css'
import Page1 from './Page1'

function ReportName() {
  return (
    <Page1 />
  )
}

export default ReportName
```

### ページコンポーネント（Page*.tsx）

- 1ページ = 1コンポーネント = 1つの `<section className="sheet padding-10mm">`
- paper-cssの `sheet` クラスでA4用紙1枚分のレイアウトを管理する
- データは同ファイル内にハードコードする（外部APIやpropsからの注入は不要）
- ページ内のHTMLは帳票のレイアウトに集中する

### CSS設計

- クラス名は `{report-name}-{element}` の命名規則に従う（例: `simple-list-title`, `simple-list-item`）
- 各帳票のCSSは独立したファイルで管理し、他の帳票に影響を与えない
- 共通ユーティリティクラス（例: `margin-top-24`）は `src/App.css` に配置する
- font-sizeはpx単位で指定する

### グローバル設定

- `index.html`: `<body class="A4">` でpaper-cssのA4サイズを適用
- `src/index.css`: ベースフォント設定（`system-ui, sans-serif`）
- `src/App.tsx`: 帳票コンポーネントの表示
- `src/App.css`: 帳票横断で使う共通ユーティリティクラス

## 新しい帳票を追加する手順

1. `src/components/{ReportName}/` ディレクトリを作成
2. `{ReportName}.tsx`（エントリポイント）、`{ReportName}.css`、`Page1.tsx` を作成
