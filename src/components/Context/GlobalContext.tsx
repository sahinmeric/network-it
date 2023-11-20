// GlobalContext.tsx
import React, { useState } from "react";

interface GlobalContextValue {
  isLoggedIn: boolean;
  loginOpen: boolean;
  signupOpen: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSignupOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        loginOpen,
        signupOpen,
        setIsLoggedIn,
        setLoginOpen,
        setSignupOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
