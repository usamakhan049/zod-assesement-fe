import { Octokit } from "octokit";
import React, { createContext, useContext, useState } from "react";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

interface IOctokitContext {
  octokit: Octokit | null;
}

interface IOctokitContextProvider {
  children: React.ReactNode;
}

const OctokitContext = createContext<IOctokitContext>({
  octokit: null,
});

export const OctokitProvider: React.FC<IOctokitContextProvider> = ({
  children,
}) => {
  const initialState: IOctokitContext = {
    octokit: new Octokit({
      auth: GITHUB_TOKEN,
    }),
  };
  const [state] = useState<IOctokitContext>(initialState);

  return (
    <OctokitContext.Provider value={state}>{children}</OctokitContext.Provider>
  );
};

export const useOctoKit = (): IOctokitContext => {
  const context = useContext(OctokitContext);
  if (context === undefined || context === null) {
    throw new Error("useOctoKit must be used withim OctokitContext Provider");
  }
  return context;
};
