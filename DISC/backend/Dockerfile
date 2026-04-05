# Python + slim イメージ
FROM python:3.11-slim

# 作業ディレクトリ
WORKDIR /app

# 依存関係をコピーしてインストール
RUN pip install --upgrade pip
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# プロジェクト全体をコピー
COPY . /app

# FastAPI 起動
CMD ["uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "8000"]
