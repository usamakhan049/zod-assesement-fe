import React from "react";
import { Button } from "@components/Button";
import ErrorIcon from "@assets/error-icon.svg";
import DarkErrorIcon from "@assets/error-icon-dark.svg";
import { useTheme } from "@context/ThemeContext";

interface IErrorProps {
  errorMessage?: string;
  retry: () => void;
  textSize?: string;
  iconSize?: string;
}
const Error: React.FC<IErrorProps> = (props) => {
  const {
    errorMessage = "Something bad happend. Please try again later",
    retry,
    textSize,
    iconSize
  } = props;
  const { darkMode } = useTheme();
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <img src={darkMode ? ErrorIcon : DarkErrorIcon} className={`w-16 h-16 ${iconSize}`} />
      <p className={`text-base text-error ${textSize}`}>{errorMessage}</p>
      <Button
        label="Retry"
        onClickCallback={() => retry()}
        extraAttributes=""
      />
    </div>
  );
};

export default Error;
