import { useTheme } from "@context/ThemeContext";
import Error from "./Error";

const ErrorPage: React.FC = () => {
  const { darkMode } = useTheme();
  const retry = () => {
    window.location.href = "/";
  };
  return (
    <div
      className={`bg-default flex flex-row justify-center items-center min-h-screen ${
        darkMode ? "dark" : ""
      }`}
    >
      <Error retry={retry} />
    </div>
  );
};

export default ErrorPage;
