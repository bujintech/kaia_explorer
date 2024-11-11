"use client";

import { createContext } from "react";

export const context = createContext();

export const Provider = context.Provider;

export default function RenderChilden({ children, data }) {
  return <Provider value={data}>{children}</Provider>;
}
