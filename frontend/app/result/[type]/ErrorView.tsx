type Props = {
  type?: string
}

export default function ErrorView({ type }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">不正なアクセス</h1>
        <p>受け取った値: [{type ?? "undefined"}]</p>
        <p>文字数: {type?.length ?? 0}</p>
        <p>型: {typeof type}</p>
        <p>有効な値: R, I, S, C</p>
      </div>
    </div>
  )
}