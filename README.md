# 「pnpm workspace 実践ノウハウ」サンプルリポジトリ

2023/09/09 [~ 秋のエンジニア大交流会 & LT会！！~](https://devguil.connpass.com/event/290596/)で発表したセッションのサンプルリポジトリとスライドです。

- [Speaker Deckのスライド](https://speakerdeck.com/mh4gf/pnpm-workspaceshi-jian-nouhau)

## リポジトリ構成

- [./package.json](./package.json)をルートとした、pnpm workspaceのモノレポ構成となっています。[create-turbo](https://turbo.build/repo/docs/getting-started/create-new)で生成したプロジェクトをベースにしています。
- [./slide/](./slide/)はセッションで利用したスライドのPDFと、スライドの生成に利用した[Marp](https://marp.app/)形式のMarkdownファイルが含まれています。

```
.
├── package.json ... ルートのpackage.json
├── apps
│   └── web ... Next.js アプリケーション
├── packages
│   ├── configs ... 各パッケージで利用する共通の設定ファイルを格納
│   │   ├── prettier
│   │   └── tsconfig
│   ├── eslint-config-custom ... eslintの共通設定
│   └── ui ... Reactコンポーネントライブラリ
├── turbo
│   └── generators ... パッケージのコード生成に利用するturboのジェネレータ
└── slide ... セッションで利用したスライド
```

## getting started

```
pnpm install
pnpm dev
```
