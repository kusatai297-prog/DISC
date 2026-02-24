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
├── backend
│   ├── api
|   |    ├── main.py
|   |    └── question.py
│   ├── tests ── test_backend_DISC.py
|   └── Dockerfile
├── frontend
│   ├── app 
|   |    ├── page.tsx
|   |    └── result ── [type] 
|   |                    ├── page.tsx
|   |                    ├── ErrorView.tsx
|   |                    └── ResultView.tsx
|   ├── components
|   |       ├── Question.tsx
|   |       └── RatingButton.tsx
|   ├── hooks ── useDiagnosis.tsx
|   ├── lib ── postAnswers.tsx
|   ├── Dockerfile
│   └── package.json
|── README.md
|
|
└── docker-compose.yml
```

---


---

###  バックエンド起動

```bash
cd backend/api
uvicorn main:app --reload


###　フロントエンド起動
cd frontend
npm install
npm run dev

### Dockerで起動する場合
docker-compose up --build

###　テスト
cd backend
pytest
