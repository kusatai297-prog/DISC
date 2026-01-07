'use client'

import React, { useState } from 'react';
import { question } from './questions';
import { useRouter } from "next/navigation";

const Card = ({ question, selected, onSelect }) => {
  return (
    <div className="card py-10">
      <h2 className="card-question text-center text-2xl font-medium pl-12 pr-6 py-6">
        {question.number}.{question.content}
      </h2>

      <div className="card-answer text-center space-x-4">
        {[1,2,3,4,5].map((num) => (
          <button
              key={num}
              onClick={() => onSelect(num)}
              className={`
                w-20 h-20 text-2xl font-semibold
                border border-gray-400 rounded-xl
                transition
                ${selected === num ? "bg-blue-300 text-black" : "bg-white text-black"}
            `}
          >
          {num}
          </button>
        ))}
      </div>
    </div>
  );
};


export default function Home() {
  const router = useRouter();
  const [answers, setAnswers] = useState<number[]>(Array(question.length).fill(0));

  const handleAnswer = (index: number, num: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = num;
    setAnswers(newAnswers);
  };


  const payload = answers.map((ans,idx) => ({
      number: idx+1,
      answer: ans
    }));
  
  const handlesend = async () => {
    if (answers.some(ans => ans===0)){
      alert("すべての質問に回答してください");
      return ;
    }
    const response = await fetch("http://127.0.0.1:8000/answers",{
    method: "POST",
    headers: {"Content-type":"application/json"},
    body: (JSON.stringify({answers:payload}))
  })
    const data = await response.json()
    console.log(data)

    if (data.status == "error"){
      alert(data.message);
    }
    else{
      router.push(`/result/${data.type}`)
    }
}

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">
        RISCタイプ診断
      </h1>
      <p className="text-lg text-center text-gray-700 leading-relaxed">
      この診断ではあなたが思ったことをそのまま回答してください。<br />
      5が最も当てはまり、1が当てはまらないというように回答してください。
    </p>
      {question.map((q, idx) => (
        <Card 
          key={q.number} 
          question={q} 
          selected={answers[idx]} 
          onSelect={(num) => handleAnswer(idx, num)} 
        />
      ))}
      <button 
      className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100 active:scale-95"
      onClick={handlesend}>
        結果を見る
      </button>
    </>
  );
}
