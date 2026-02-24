"use client";

import { Question } from "@/components/Question";
import { questions } from '@/lib/questions';
import { useDiagnosis } from '@/hooks/useDiagnosis';

export default function Home(){
  const {answer, handleSelect, submit, isSubmitting} = useDiagnosis(questions.length);

  return (
  <main className="min-h-screen flex flex-col items-center px-6 py-12 bg-gray-50">

  <div className="text-center mb-12">
    <h1 className="text-5xl font-bold mb-4">
      DISC診断
    </h1>
    <h2 className="text-2xl text-gray-600">
      直観に従って正直に答えてください
    </h2>
  </div>

  <div className="w-full max-w-3xl mx-auto space-y-8">
    {questions.map((q, idx) => (
      <Question
        key={q.number}
        {...q}
        selectedAnswer={answer[idx]}
        onSelect={(n) => handleSelect(idx, n)}
      />
    ))}
  </div>

  <div className="mt-12">
    <button
      onClick={submit}
      disabled={isSubmitting}
      className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 disabled:opacity-50 transition"
    >
      結果を見る
    </button>
  </div>

</main>
  )
}