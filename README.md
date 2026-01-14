# DISCアプリ

DISCタイプ（D / I / S / C）のうち、どのタイプであるかを診断するための Web アプリです。質問に回答することでユーザーの傾向を判定します。

---

## 概要

フロントエンドは Next.js（TypeScript）、バックエンドは FastAPI（Python）で実装されています。質問画面の表示と回答送信をフロントエンドが担当し、質問データの管理と診断ロジックの処理をバックエンドが担当します。
![質問画面](https://github.com/kusatai297-prog/DISC/blob/main/images/example_2.png)
![resultページ](https://github.com/kusatai297-prog/DISC/blob/main/images/example_1.png)

---

## ディレクトリ構成

```
.
├── api
│   ├── DISC.py
│   └── question.py
├── app
│   ├── page.tsx
│   └── package.json
└── README.md
```

---

## ファイル説明

### api
- DISC.py：FastAPI を用いたバックエンドのメインファイル
- question.py：DISC.py から import される補助ファイル

### app
- page.tsx：質問画面を表示する Next.js のページ

---

## 実行方法

### バックエンド

```bash
cd api
uvicorn DISC:app --reload
```

### フロントエンド

```bash
cd app
npm run dev
```

