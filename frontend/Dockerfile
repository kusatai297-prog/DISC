# Node.js の軽量 Alpine イメージを使用
FROM node:20-alpine

WORKDIR /app

# 依存関係をコピーしてインストール
COPY ../package*.json ./
RUN npm install

# プロジェクト全体をコピー
COPY ./frontend /app

# Next.js を開発モードで起動
CMD ["npm", "run", "dev"]