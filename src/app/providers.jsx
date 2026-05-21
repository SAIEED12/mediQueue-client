"use client";
import { ReactLenis } from "lenis/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <ReactLenis 
      root 
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        smoothWheel: true,
        orientation: "vertical",
      }}
    >
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
      </ThemeProvider>
    </ReactLenis>
  );
}