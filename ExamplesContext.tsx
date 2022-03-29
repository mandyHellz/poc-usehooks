import { createContext, ReactNode, useState } from "react";

interface HelloContextProviderProps {
  children: ReactNode;
}

export const ExampleContext = createContext([] as any);

export function HelloContextProvider({ children }: HelloContextProviderProps) {
  const helloContext = "Eu sou um valor passado por contexto!";

  return (
    <ExampleContext.Provider value={helloContext}>
      {children}
    </ExampleContext.Provider>
  );
}
