import { ReactNode, useEffect } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useTheme } from "@context/ThemeContext";
import { LocalStorage } from "@utils/LocalStorage";

interface ILayoutProps {
  children: ReactNode;
}
const Layout: React.FC<ILayoutProps> = (porps) => {
  const { children } = porps;
  const { darkMode, setDarkMode } = useTheme();

  useEffect(() => {
    const isDarkMode = LocalStorage.get("darkMode") === "true";
    setDarkMode(isDarkMode);
  },[]);
  
  return (
    <div className={`conatiner flex flex-col min-h-screen w-full bg-default ${darkMode ? 'dark' : ''}`}>
      <Header />
      <main className="flex-grow w-full px-8 lg:ps-28 lg:pe-24 py-12 max-w-screen-2xl self-center">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;