import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IError } from "@models/IError";
import { IReposResponse } from "@models/IReposResponse";
import { useOctoKit } from "@context/OctokitContext";

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;

export const useGetRepos = (): UseQueryResult<IReposResponse, IError> => {
   const { octokit } = useOctoKit();

  return useQuery({
     queryKey: ['Repos'],
     queryFn: async () => {
        try {
            const options = {
              username: GITHUB_USERNAME,
              per_page: 100,
              page: 1,
            };
            let response = await octokit!.rest.repos.listForUser(options);
            let repos = response.data;
        
            while (response.data.length === 100) {
              options.page++;
              response = await octokit!.rest.repos.listForUser(options);
              repos = repos.concat(response.data);
            }
            return repos;
        } catch (error: IError | unknown) {
           let errText = 'Project loading failed.';
           const typedError = error as IError;
           if (typedError?.message !== undefined) {
              errText = typedError?.message;
           }
           if (errText === 'Network Error' || errText === 'timeout exceeded') {
              throw new Error(`Please check your internet connection`);
           } else {
              throw new Error(errText);
           }
        }
     },
  });
};

