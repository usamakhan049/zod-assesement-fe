import React, { createContext, useContext, useState } from "react";

interface IThemeContext {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

interface IThemeContextProvider {
  children: React.ReactNode;
}

export const ThemeContext = createContext<IThemeContext>({
  darkMode: false,
  setDarkMode: () => {},
});

export const ThemeProvider: React.FC<IThemeContextProvider> = ({
  children,
}) => {
  const setDarkMode = (darkMode: boolean): void => {
    setState((prevState) => ({
      ...prevState,
      darkMode,
    }));
  };

  const initialState: IThemeContext = {
    darkMode: false,
    setDarkMode,
  };
  const [state, setState] = useState<IThemeContext>(initialState);

  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext);
  if (context === undefined || context === null) {
    throw new Error("useTheme must be used withim ThemeContext Provider");
  }
  return context;
};
