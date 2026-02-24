export const RISC_TYPES = {
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