from fastapi.testclient import TestClient
from api.main import app  

client = TestClient(app)

#正常系
def test_success():
    # 40個の質問に回答（1〜5のパターンで埋める）
    answers_payload = [{"number": i+1, "answer": (i % 5) + 1} for i in range(40)]

    response = client.post(
        "/answers",
        json={"answers": answers_payload},
    )

    # ステータスコードが 200（正常）であることを確認
    assert response.status_code == 200, f"Expected 200 OK, got {response.status_code}"

    data = response.json()

    # レスポンスに "status" が success であることを確認
    assert data["status"] == "success", f"Expected status 'success', got {data['status']}"

    # DISCタイプが返っていることを確認
    assert "type" in data, f"Response missing 'type': {data}"

#未回答
def test_incomplete_answers():
    response = client.post(
        "/answers",
        json={
            "answers": [
                {"number": 1, "answer": 3},
                {"number": 2, "answer": 0},  # 未回答
            ]
        },
    )

    assert response.status_code == 400
    assert response.json()["detail"]["status"] == "error"

    #存在しない質問番号
def test_invalid_question_number():
    response = client.post(
        "/answers",
        json={
            "answers": [
                {"number": 999, "answer": 3},
            ]
        },
    )

    assert response.status_code == 400

#空配列
def test_empty_answers():
    response = client.post(
        "/answers",
        json={"answers": []},
    )

    assert response.status_code == 400


