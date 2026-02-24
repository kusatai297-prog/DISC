import ResultView from "./ResultView"
import ErrorView from "./ErrorView"
import { RISC_TYPES } from "./riscTypes"

type RiscType = keyof typeof RISC_TYPES

export default async function ResultPage({
  params,
}: {
  params: Promise<{ type?: string }>
}) {

  const { type } = await params   // ← ここが重要

  if (!type || !(type in RISC_TYPES)) {
    return <ErrorView type={type ?? "undefined"} />
  }

  const typeData = RISC_TYPES[type as RiscType]

  return <ResultView typeData={typeData} />
}