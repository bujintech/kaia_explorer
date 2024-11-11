"use client";

import { useGlobalData } from "../layout/context";

export function BlockProposer({ miner }: { miner: string }) {
  const { gcConfig } = useGlobalData();
  return gcConfig?.[miner] || "--";
}

export function Method({ input }: { input: string }) {
  const startKey = input.substring(0, 10);
  const { methodConfig } = useGlobalData();

  const method = methodConfig?.[startKey];

  if (method) {
    return method.split("(")[0];
  }

  return startKey;
}
