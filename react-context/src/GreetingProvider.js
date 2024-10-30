import React, { createContext, useState } from "react";

export const GreetingContext = createContext();

export function GreetingProvider({ children }) {
  const [greeting, setGreeting] = useState("What up");
  const [name, setName] = useState("John");

  const contextValue = { greeting, name, setGreeting, setName };

  return (
    <GreetingContext.Provider value={contextValue}>
      {children}
    </GreetingContext.Provider>
  );
}
