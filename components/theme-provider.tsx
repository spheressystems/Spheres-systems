"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  React.useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      document.documentElement.classList.add("theme-ready");
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
