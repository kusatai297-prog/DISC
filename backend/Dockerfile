# 1. 使うOS + Python
FROM python:3.11-slim

# 2. 作業ディレクトリ
WORKDIR /app

# 3. 依存関係をコピーしてインストール
COPY ../requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 4. プロジェクトをコピー
COPY ./backend /app/backend

# 5. FastAPI を起動
CMD ["uvicorn", "backend.api.main:app", "--host", "0.0.0.0", "--port", "8000"]
