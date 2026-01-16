'use client'

import { use } from 'react'
import { RISC_TYPES } from './riscTypes'

type RiscType = keyof typeof RISC_TYPES

export default function ResultPage(
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = use(params)

  if (!isValidRiscType(type)) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">不正なアクセス</h1>
          <p>受け取った値: [{type}]</p>
          <p>文字数: {type.length}</p>
          <p>型: {typeof type}</p>
          <p>有効な値: R, I, S, C</p>
        </div>
      </div>
    )
  }

  const typeData = RISC_TYPES[type]

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* 中央配置用ラッパー */}
      <div className="flex flex-col items-center w-full max-w-2xl px-6 py-12">

        {/* タイトル */}
        <h1 className="text-4xl font-bold mb-8 text-center">
          あなたは <span className="text-blue-600">{typeData.name}</span> です！
        </h1>

        {/* 説明カード */}
        <div className="bg-white border rounded-xl p-6 mb-10 text-center shadow-sm w-full">
          <p className="mb-4 text-lg">{typeData.description}</p>
          <p className="text-gray-700">{typeData.trait}</p>
        </div>

        {/* 見出し */}
        <h2 className="text-3xl font-bold mb-6 text-center">
          向いている仕事の例
        </h2>

        {/* 仕事リスト */}
        <ul className="flex flex-col items-center space-y-6 w-full">
          {typeData.jobs.map((job, index) => (
            <li
              key={index}
              className="bg-white border rounded-xl p-6 shadow-sm text-center w-full"
            >
              <h3 className="text-xl font-semibold mb-2">
                {job.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {job.description}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

function isValidRiscType(type: string): type is RiscType {
  return type in RISC_TYPES
}
