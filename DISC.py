from fastapi import FastAPI
from pydantic import BaseModel , Field
import question
from fastapi.middleware.cors import CORSMiddleware
import copy


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#クラスの定義
class person(BaseModel):
    result_R : int
    result_I : int
    result_S : int
    result_C : int
    result : str
    state : bool

class Answers(BaseModel):
    answers : list[question.ans]

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

    
#点数計算ループ
@app.post("/answers")
def get_answer(data:Answers):
    #必要な変数の定義
    p=person(result_R = 0,result_C = 0,result_I = 0,result_S = 0,state = False,result = "")
    all_answered = True                                             

    answer_result = copy.deepcopy(question.question_data)

    for ans in data.answers:
        answer_result[ans.number-1].answer = ans.answer
        
    #点数計算、解答確認ループ
    for i in  (answer_result):
        if p.result == "R":
            return {"status":"success","type":"R"}
        elif p.result == "I":
            return {"status":"success","type":"I"}
        elif p.result == "S":
            return {"status":"success","type":"S"}
        elif p.result == "C":
            return {"status":"success","type":"C"}
        
    if not all_answered:
        return {
            "status": "error",
            "message": "You have to answer all question"
        }



    p.state = all_answered
    #タイプ判定
    scores = {
        "R" : p.result_R,
        "I" : p.result_I,
        "S" : p.result_S,
        "C" : p.result_C
    }
    if p.state == True:
        p.result = max(scores, key = scores.get)
        if p.result == "R":
            return {"status":"ok","type":"R"}
        if p.result == "I":
            return {"status":"ok","type":"I"}
        if p.result == "S":
            return {"status":"ok","type":"S"}
        if p.result == "C":
            return {"status":"ok","type":"C"}
    return {"status":"success","type":p.result}
