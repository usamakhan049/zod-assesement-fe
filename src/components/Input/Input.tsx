import React, { useState } from "react";
export interface IInputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  width?: string;
  placeholderColor?: string;
  backgroundColor?: string;
  borderRadius?: string;
  textColor?: string;
  textSize?: string;
  border?: string;
  isDisabled?: boolean;
  onDisabled?: string;
  iconPath?: string;
  onHover?: string;
  onActive?: string;
  inputType?: string;
  extraAttributes?: string;
  disableCopyPaste?: boolean;
  autoComplete?: string;
  onChange?: (newValue: string) => void;
}

export const DEFAULT_INPUT: IInputProps = {
  width: "w-full",
  backgroundColor: "bg-transparent",
  border: "border border-border",
  borderRadius: "rounded-md",
  placeholder: "Placeholder",
  placeholderColor: "placeholder:text-muted",
  isDisabled: false,
  onHover: "enabled:hover:border-border",
  onActive: "enabled:focus:outline-none enabled:focus:border-border",
  textSize: "text-sm",
  textColor: "enabled:text-default",
};

const BaseInput: React.FC<IInputProps> = (props: IInputProps) => {
  const {
    value,
    label,
    placeholder,
    width,
    extraAttributes,
    iconPath,
    inputType,
    isDisabled,
    textSize,
    backgroundColor,
    borderRadius,
    placeholderColor,
    textColor,
    onHover,
    onActive,
    border,
    disableCopyPaste,
    autoComplete,
    onChange,
  } = props;
  const [inputValue, setInputValue] = useState<string>(value ?? "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (onChange !== null && onChange !== undefined) {
      onChange(newValue);
    }
  };

  return (
    <div
      className={`${width} ${extraAttributes} relative`}
      data-testid="base-input"
    >
      {label !== "" && label !== undefined && (
        <div className="opacity-50 mb-2.5 text-black text-xs font-semibold leading-3">
          {label}
        </div>
      )}
      {iconPath && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <img src={iconPath} alt="icon" className="h-5 w-5 text-gray-400" />
        </div>
      )}
      <div className="relative w-full gap-1 align-items block">
        <input
          type={inputType}
          value={inputValue}
          placeholder={placeholder}
          disabled={isDisabled}
          onChange={handleChange}
          className={`w-full ps-10 pe-2 py-1.5 focus:ring-0 ${textSize} ${backgroundColor} ${borderRadius} ${placeholderColor}
                     ${textColor} ${onHover} ${onActive} ${border}`}
          onPaste={(e) => {
            if (disableCopyPaste === true) e.preventDefault();
          }}
          onCopy={(e) => {
            if (disableCopyPaste === true) e.preventDefault();
          }}
          autoComplete={autoComplete}
        />
      </div>
    </div>
  );
};

export const Input: React.FC<IInputProps> = (props: IInputProps) => {
  return <BaseInput {...DEFAULT_INPUT} {...props} />;
};
