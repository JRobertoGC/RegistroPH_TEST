import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  loadingContext: boolean;
  setLoadingContext: (loading: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [loadingContext, setLoadingContext] = useState(false);

  return (
    <AppContext.Provider value={{ loadingContext, setLoadingContext }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
