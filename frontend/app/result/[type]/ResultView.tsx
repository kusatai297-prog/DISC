type Props = {
  typeData: {
    name: string
    description: string
    trait: string
    jobs: {
      title: string
      description: string
    }[]
  }
}

export default function ResultView({ typeData }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-2xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          あなたは <span className="text-blue-600">{typeData.name}</span> です！
        </h1>

        <div className="bg-white border rounded-xl p-6 mb-10 text-center shadow-sm w-full">
          <p className="mb-4 text-lg">{typeData.description}</p>
          <p className="text-gray-700">{typeData.trait}</p>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center">
          向いている仕事の例
        </h2>

        <ul className="flex flex-col items-center space-y-6 w-full">
          {typeData.jobs.map((job, index) => (
            <li key={index} className="bg-white border rounded-xl p-6 shadow-sm text-center w-full">
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-700 leading-relaxed">{job.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}