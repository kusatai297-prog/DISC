"use client";

import { useEffect } from "react";

type Props = {
  type?: string;
};

export default function ErrorView({ type }: Props) {
  useEffect(() => {
    console.error("不正なアクセス");
    console.error("受け取った値:", type ?? "undefined");
    console.error("文字数:", type?.length ?? 0);
    console.error("型:", typeof type);
    console.error("有効な値: D, I, S, C");
  }, [type]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">不正なアクセス</h1>
      </div>
    </div>
  );
}
