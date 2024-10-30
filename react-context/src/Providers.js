// Providers.js
import React from "react";
import { GreetingProvider } from "./GreetingProvider";
import { ThemeProvider } from "./ThemeProvider";

export function Providers({ children }) {
  return (
    <GreetingProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </GreetingProvider>
  );
}
