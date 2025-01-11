import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IError } from "@models/IError";
import { IUser } from "@models/IUser";
import { useOctoKit } from "@context/OctokitContext";

export const useGetUser = (): UseQueryResult<IUser, Error> => {
  const { octokit } = useOctoKit();
  return useQuery({
     queryKey: ['User'],
     queryFn: async () => {
        try {
              const {
                data
              } = await octokit!.rest.users.getAuthenticated();
              return data;
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


