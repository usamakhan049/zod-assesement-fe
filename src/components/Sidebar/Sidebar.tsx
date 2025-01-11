import CircleImage from "@components/Image";
import { Button } from "@components/Button";
import { useGetUser } from "@hooks/useGetUser";
import SidebarSkelton from "../Skelton/SidebarSkelton";
import Error from "@components/Error";

const Sidebar: React.FC = () => {
  const {
    data: user,
    isLoading: isUserLoading,
    isError,
    error,
    refetch,
  } = useGetUser();

  if (isUserLoading) return <SidebarSkelton />;
  if (isError && error !== null)
    return (
      <div className="flex flex-row w-full justify-center pe-4 lg:w-1/4 lg:justify-start">
        <Error retry={() => refetch()} textSize="text-xs" iconSize="!h-10 !w-10" />
      </div>
    );

  return (
    <div className="flex flex-row w-full justify-center pe-4 lg:w-1/4 lg:justify-start">
      <div className="flex flex-col justify-start text-center lg:text-start">
        <div className="border border-border border-0.5 rounded-full w-1/2 lg:w-full self-center">
          <CircleImage src={user?.avatar_url ?? ""} alt="avatar" />
        </div>
        <p className="text-2xl text-default font-semibold mt-4">{user?.name}</p>
        <p className="text-xl text-muted font-light ">{user?.name}</p>
        <p className="text-base text-default mt-4 ">{user?.bio}</p>
        <Button label="Edit Profile" extraAttributes="mt-4" />
      </div>
    </div>
  );
};

export default Sidebar;
