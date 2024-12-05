"use client";

import { createContext, useState, useEffect, useContext } from "react";

type ProviderData = {
  methodConfig: Record<string, string>;
  gcConfig: Record<string, string>;
  isMobile?: boolean;
};

export const context = createContext<ProviderData>({ methodConfig: {}, gcConfig: {} });

export const Provider = context.Provider;

export const useGlobalData = () => {
  return useContext(context);
};

export default function RenderChilden({ children, data }: { children: React.ReactNode; data: ProviderData }) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>();

  useEffect(() => {
    function setRem() {
      setIsMobile(document.body.clientWidth <= 668);

      const baseSize = 16;
      const width = document.body.clientWidth;

      let newSize = (width / 1920) * baseSize;
      if (width <= 668) {
        newSize = (width / 375) * baseSize;
      }
      document.documentElement.style.fontSize = newSize + "px";
    }
    setRem();
    window.addEventListener("resize", setRem);

    return window.removeEventListener("reset", setRem);
  }, []);

  if (typeof isMobile === "undefined") return null;

  return (
    <Provider
      value={{
        ...data,
        isMobile,
      }}
    >
      {children}
    </Provider>
  );
}
