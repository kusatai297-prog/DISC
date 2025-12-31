'use client'

import { use } from 'react'

//タイプ定義
const RISC_TYPES = {
  R: {
    name:"Rタイプ",
    description:"モノや機械、体を動かす実践的なものを好む傾向があります。",
    trait: "具体的、実際的な仕事が得意です。",
    jobs : [{
      title: "エンジニア",
      description: "設備を作ったり、整備したりするなど、機械や道具を使って体を動かす仕事が向いています。" 
    },
    {
      title: "大工",
      description: "建物や家具を自分の手で作る大工は、Rタイプにぴったりの職業です。"
    }]
  },
  I: {
    name: 'Iタイプ',
    description: '探求心が強く、論理的に考えたり分析することが好きです。',
    trait: '科学的なアプローチが得意です。',
    jobs: [
      {
        title: '研究職・学者',
        description: '探求心と論理的思考力を活かせる仕事です。'
      },
      {
        title: 'プログラマー・システムエンジニア',
        description: '論理的に物事を組み立てる力が求められます。'
      }
    ]
  },
  S: {
    name: 'Sタイプ',
    description: '人と関わるのが好きで、チームワークを大切にするタイプです。',
    trait: 'コミュニケーション能力に優れています。',
    jobs: [
      {
        title: '教師',
        description: '人に教えること、人と関わることが得意な人に向いています。'
      },
      {
        title: '接客業',
        description: 'コミュニケーション能力を活かせる仕事です。'
      }
    ]
  },
  C: {
    name: 'Cタイプ',
    description: '正確性や秩序を重んじ、決められたルールの中でコツコツ作業することが得意なタイプです。',
    trait: '細部への注意力と正確性に優れています。',
    jobs: [
      {
        title: '経理',
        description: '正確さと規律を大切にする仕事です。'
      },
      {
        title: 'データ入力',
        description: '集中力を活かして進める仕事です。'
      }
    ]
  }
} as const

type RiscType = keyof typeof RISC_TYPES

export default function ResultPage(
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = use(params)
  
  // デバッグ情報を表示
  console.log('受け取ったtype:', type)
  console.log('typeの型:', typeof type)
  console.log('typeの長さ:', type.length)
  console.log('有効なタイプ:', Object.keys(RISC_TYPES))
  console.log('type in RISC_TYPES:', type in RISC_TYPES)
  
  // 型チェック
  if (!isValidRiscType(type)) {
    return (
      <div>
        <h1>不正なアクセス</h1>
        <p>受け取った値: [{type}]</p>
        <p>文字数: {type.length}</p>
        <p>型: {typeof type}</p>
        <p>有効な値: R, I, S, C</p>
        <pre>{JSON.stringify({ type }, null, 2)}</pre>
      </div>
    )
  }

  const typeData = RISC_TYPES[type]

  return (
  <div className="max-w-3xl mx-auto px-6 py-10">
    {/* タイトル */}
    <h1 className="text-4xl font-bold text-center mb-6">
      あなたは<span className="text-blue-600">{typeData.name}</span>です！
    </h1>

    {/* 説明 */}
    <div className="bg-gray-50 rounded-xl p-6 mb-10 leading-relaxed text-lg">
      <p className="mb-4">{typeData.description}</p>
      <p className="text-gray-700">{typeData.trait}</p>
    </div>

    {/* 見出し */}
    <h2 className="text-3xl font-bold text-center mb-6">
      向いている仕事の例
    </h2>

    {/* 仕事リスト */}
    <ul className="space-y-6">
      {typeData.jobs.map((job, index) => (
        <li
          key={index}
          className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
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
)
}

function isValidRiscType(type: string): type is RiscType {
  return type in RISC_TYPES
=======
'use client'

import { use } from 'react'

//タイプ定義
const RISC_TYPES = {
  R: {
    name:"Rタイプ",
    description:"モノや機械、体を動かす実践的なものを好む傾向があります。",
    trait: "具体的、実際的な仕事が得意です。",
    jobs : [{
      title: "エンジニア",
      description: "設備を作ったり、整備したりするなど、機械や道具を使って体を動かす仕事が向いています。" 
    },
    {
      title: "大工",
      description: "建物や家具を自分の手で作る大工は、Rタイプにぴったりの職業です。"
    }]
  },
  I: {
    name: 'Iタイプ',
    description: '探求心が強く、論理的に考えたり分析することが好きです。',
    trait: '科学的なアプローチが得意です。',
    jobs: [
      {
        title: '研究職・学者',
        description: '探求心と論理的思考力を活かせる仕事です。'
      },
      {
        title: 'プログラマー・システムエンジニア',
        description: '論理的に物事を組み立てる力が求められます。'
      }
    ]
  },
  S: {
    name: 'Sタイプ',
    description: '人と関わるのが好きで、チームワークを大切にするタイプです。',
    trait: 'コミュニケーション能力に優れています。',
    jobs: [
      {
        title: '教師',
        description: '人に教えること、人と関わることが得意な人に向いています。'
      },
      {
        title: '接客業',
        description: 'コミュニケーション能力を活かせる仕事です。'
      }
    ]
  },
  C: {
    name: 'Cタイプ',
    description: '正確性や秩序を重んじ、決められたルールの中でコツコツ作業することが得意なタイプです。',
    trait: '細部への注意力と正確性に優れています。',
    jobs: [
      {
        title: '経理',
        description: '正確さと規律を大切にする仕事です。'
      },
      {
        title: 'データ入力',
        description: '集中力を活かして進める仕事です。'
      }
    ]
  }
} as const

type RiscType = keyof typeof RISC_TYPES

export default function ResultPage(
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = use(params)
  
  // デバッグ情報を表示
  console.log('受け取ったtype:', type)
  console.log('typeの型:', typeof type)
  console.log('typeの長さ:', type.length)
  console.log('有効なタイプ:', Object.keys(RISC_TYPES))
  console.log('type in RISC_TYPES:', type in RISC_TYPES)
  
  // 型チェック
  if (!isValidRiscType(type)) {
    return (
      <div>
        <h1>不正なアクセス</h1>
        <p>受け取った値: [{type}]</p>
        <p>文字数: {type.length}</p>
        <p>型: {typeof type}</p>
        <p>有効な値: R, I, S, C</p>
        <pre>{JSON.stringify({ type }, null, 2)}</pre>
      </div>
    )
  }

  const typeData = RISC_TYPES[type]

  return (
  <div className="max-w-3xl mx-auto px-6 py-10">
    {/* タイトル */}
    <h1 className="text-4xl font-bold text-center mb-6">
      あなたは<span className="text-blue-600">{typeData.name}</span>です！
    </h1>

    {/* 説明 */}
    <div className="bg-gray-50 rounded-xl p-6 mb-10 leading-relaxed text-lg">
      <p className="mb-4">{typeData.description}</p>
      <p className="text-gray-700">{typeData.trait}</p>
    </div>

    {/* 見出し */}
    <h2 className="text-3xl font-bold text-center mb-6">
      向いている仕事の例
    </h2>

    {/* 仕事リスト */}
    <ul className="space-y-6">
      {typeData.jobs.map((job, index) => (
        <li
          key={index}
          className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
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
)
}

function isValidRiscType(type: string): type is RiscType {
  return type in RISC_TYPES

'use client'

import { use } from 'react'

//タイプ定義
const RISC_TYPES = {
  R: {
    name:"Rタイプ",
    description:"モノや機械、体を動かす実践的なものを好む傾向があります。",
    trait: "具体的、実際的な仕事が得意です。",
    jobs : [{
      title: "エンジニア",
      description: "設備を作ったり、整備したりするなど、機械や道具を使って体を動かす仕事が向いています。" 
    },
    {
      title: "大工",
      description: "建物や家具を自分の手で作る大工は、Rタイプにぴったりの職業です。"
    }]
  },
  I: {
    name: 'Iタイプ',
    description: '探求心が強く、論理的に考えたり分析することが好きです。',
    trait: '科学的なアプローチが得意です。',
    jobs: [
      {
        title: '研究職・学者',
        description: '探求心と論理的思考力を活かせる仕事です。'
      },
      {
        title: 'プログラマー・システムエンジニア',
        description: '論理的に物事を組み立てる力が求められます。'
      }
    ]
  },
  S: {
    name: 'Sタイプ',
    description: '人と関わるのが好きで、チームワークを大切にするタイプです。',
    trait: 'コミュニケーション能力に優れています。',
    jobs: [
      {
        title: '教師',
        description: '人に教えること、人と関わることが得意な人に向いています。'
      },
      {
        title: '接客業',
        description: 'コミュニケーション能力を活かせる仕事です。'
      }
    ]
  },
  C: {
    name: 'Cタイプ',
    description: '正確性や秩序を重んじ、決められたルールの中でコツコツ作業することが得意なタイプです。',
    trait: '細部への注意力と正確性に優れています。',
    jobs: [
      {
        title: '経理',
        description: '正確さと規律を大切にする仕事です。'
      },
      {
        title: 'データ入力',
        description: '集中力を活かして進める仕事です。'
      }
    ]
  }
} as const

type RiscType = keyof typeof RISC_TYPES

export default function ResultPage(
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = use(params)
  
  // デバッグ情報を表示
  console.log('受け取ったtype:', type)
  console.log('typeの型:', typeof type)
  console.log('typeの長さ:', type.length)
  console.log('有効なタイプ:', Object.keys(RISC_TYPES))
  console.log('type in RISC_TYPES:', type in RISC_TYPES)
  
  // 型チェック
  if (!isValidRiscType(type)) {
    return (
      <div>
        <h1>不正なアクセス</h1>
        <p>受け取った値: [{type}]</p>
        <p>文字数: {type.length}</p>
        <p>型: {typeof type}</p>
        <p>有効な値: R, I, S, C</p>
        <pre>{JSON.stringify({ type }, null, 2)}</pre>
      </div>
    )
  }

  const typeData = RISC_TYPES[type]

  return (
  <div className="max-w-3xl mx-auto px-6 py-10">
    {/* タイトル */}
    <h1 className="text-4xl font-bold text-center mb-6">
      あなたは<span className="text-blue-600">{typeData.name}</span>です！
    </h1>

    {/* 説明 */}
    <div className="bg-gray-50 rounded-xl p-6 mb-10 leading-relaxed text-lg">
      <p className="mb-4">{typeData.description}</p>
      <p className="text-gray-700">{typeData.trait}</p>
    </div>

    {/* 見出し */}
    <h2 className="text-3xl font-bold text-center mb-6">
      向いている仕事の例
    </h2>

    {/* 仕事リスト */}
    <ul className="space-y-6">
      {typeData.jobs.map((job, index) => (
        <li
          key={index}
          className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
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
)
}

function isValidRiscType(type: string): type is RiscType {
  return type in RISC_TYPE
}