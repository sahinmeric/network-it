// GlobalContext.tsx
import React, { useState } from "react";

interface GlobalContextValue {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalContext = React.createContext<GlobalContextValue | undefined>(
  undefined
);

export const useGlobalContext = () => {
  const globalContext = React.useContext(GlobalContext);

  if (globalContext === undefined) {
    throw new Error("useGlobalContext must be inside a GlobalProvider");
  }

  return globalContext;
};

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <GlobalContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
