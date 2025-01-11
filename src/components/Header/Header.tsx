import CircleImage from "@components/Image";
import GithubIcon from "@assets/github-icon.svg";
import GithubIconDark from "@assets/github-icon-dark.svg";
import MenuIcon from "@assets/menu-iocn.svg";
import MenuIconDark from "@assets/menu-iocn-dark.svg";
import DarkModeIcon from "@assets/dark-mode-icon.svg";
import LightModeIcon from "@assets/light-mode-icon.svg";
import SearchIcon from "@assets/search-icon.svg";
import { useGetUser } from "@hooks/useGetUser";
import { useTheme } from "@context/ThemeContext";
import { LocalStorage } from "@utils/LocalStorage";
import { Input } from "@components/Input";

const Header: React.FC = () => {
  const { data: user } = useGetUser();
  const { darkMode, setDarkMode } = useTheme();
  const toogleDarkMode = () => {
    LocalStorage.set("darkMode", !darkMode);
    setDarkMode(!darkMode);
  };
  return (
    <header className="bg-header py-5 px-1 sm:px-4 border-b border-border border-0.5">
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center gap-4 w-1/2">
          <div className="border border-border border-0.5 rounded-md cursor-pointer">
            <CircleImage
              src={darkMode ? MenuIcon : MenuIconDark}
              extraAttributes="!w-5 !h-5 m-1.5 hidden sm:flex"
            />
          </div>
          <CircleImage
            src={darkMode ? GithubIcon : GithubIconDark}
            extraAttributes="!w-8 !h-8"
          />
          <p className="text-sm text-default font-semibold ">{user?.name}</p>
        </div>
        <div className="flex flex-row items-center justify-end gap-4 w-1/2 ">
          <Input
            width="w-5/12"
            placeholder="Type to search"
            iconPath={SearchIcon}
            extraAttributes="hidden sm:flex"
          />
          <div
            className="border border-border border-0.5 rounded-md cursor-pointer"
            onClick={() => toogleDarkMode()}
          >
            <CircleImage
              src={darkMode ? LightModeIcon : DarkModeIcon}
              extraAttributes="w-5 h-5 m-1.5"
            />
          </div>
          <div className="border border-border border-0.5 rounded-full cursor-pointer">
            <CircleImage
              src={user?.avatar_url ?? ""}
              alt="avatar"
              extraAttributes="!w-[34px] !h-[34px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
