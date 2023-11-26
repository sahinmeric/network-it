// GlobalContext.tsx
import React, { useState } from "react";

interface GlobalContextValue {
  isLoggedIn: boolean;
  loginOpen: boolean;
  signupOpen: boolean;
  searchGroupTerm: string;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSignupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchGroupTerm: React.Dispatch<React.SetStateAction<string>>;
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
  const [searchGroupTerm, setSearchGroupTerm] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        loginOpen,
        signupOpen,
        searchGroupTerm,
        setIsLoggedIn,
        setLoginOpen,
        setSignupOpen,
        setSearchGroupTerm,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
