# Node.js + Bullseye
FROM node:20-bullseye

WORKDIR /app

# package.json と package-lock.json を先にコピーして依存をインストール
COPY package*.json ./
RUN npm install

# プロジェクト全体をコピー
COPY . .

# Next.js 開発サーバー起動
CMD ["npm", "run", "dev"]
