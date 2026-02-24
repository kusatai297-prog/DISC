from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel , Field
from . import question
from fastapi.middleware.cors import CORSMiddleware
import copy


app = FastAPI()

#エラー用関数
def raise_bad_request(message: str):
    raise HTTPException(
        status_code = status.HTTP_400_BAD_REQUEST,
        detail = {"status":"error","message":message}
    )



app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#クラスの定義
class SingleAnswer(BaseModel):
    number: int = Field(...,gt=0, description = "質問番号は1以上")
    answer: int = Field(...,ge=0, le=5 ,description = "回答は0-5の間")

class Answer(BaseModel):
    answers: list[SingleAnswer]

#データマッピング関数
def apply_answers(raw_questions, user_answers: list[SingleAnswer]):
    processed_data = copy.deepcopy(raw_questions)
    ans_map = {a.number: a.answer for a in user_answers}

    max_len = len(processed_data)

    for q in processed_data:
        if q.number in ans_map:
            q.answer = ans_map[q.number]
        else:
            pass
    
    if any(k>max_len for k in ans_map):
        raise_bad_request("存在しない質問番号が含まれています")
    
    return processed_data

#すべての質問に回答しているかの確認
def validate_completeness(processed_data):
    for q in processed_data:
        val = getattr(q,"answer",None)
        
        if val is None :
            raise_bad_request("システムエラー:回答データが破損しています")
        
        if val == 0 :
            raise_bad_request("すべての質問に回答してください")
        
    return processed_data

#計算用関数
def calculate_score(processed_data):
    scores = {"R": 0, "I": 0, "S": 0, "C": 0}
    for q in processed_data:
        val = getattr(q, "answer", 0)
        if hasattr(q, "type") and q.type in scores:
            scores[q.type] += val
    return scores



#すべての質問の表示
@app.get("/questions")
def get_questions():

    questions = []
    for i in question.question_data:
        questions.append({
            "number":i.number,
            "content":i.content
        })
    return questions

    
#メイン処理
@app.post("/answers")
def get_answer(data:Answer):
    filled_questions = apply_answers(question.question_data, data.answers)

    validate_completeness(filled_questions)

    final_scores = calculate_score(filled_questions)

    result_type = max(final_scores, key=final_scores.get)
    return {"status": "success", "type": result_type}
