import { useGetRepos } from "@hooks/useGetRepos";
import RepoItem from "@components/RepoItem";
import MainSkelton from "../Skelton/MainSkelton";
import Error from "../Error";

const MainSection: React.FC = () => {
  const {
    data: repos,
    isLoading: isRepoLoading,
    isError,
    error,
    refetch,
  } = useGetRepos();
  console.log({ error });
    if (isRepoLoading) return <MainSkelton />;
    if(isError && error !== null) return (
    <div className="flex flex-row w-full justify-center items-center lg:ps-4 lg:w-3/4 lg:mt-0">
      <Error retry={() => refetch()} />
    </div>
  );
  return (
    <div className="flex flex-row w-full mt-10 lg:ps-4 lg:w-3/4 lg:mt-0">
      <div className="flex flex-col gap-2">
        <p className="text-base text-default">Repositories</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {repos?.map((repository, index) => (
            <RepoItem key={index} repository={repository} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
