export interface ICustomButtonProps {
  label: string;
  color?: string;
  width?: string;
  borderRadius?: string;
  textColor?: string;
  contentPosition?: string;
  textSize?: string;
  onHover?: string;
  onActive?: string;
  border?: string;
  isDisabled?: boolean;
  extraAttributes?: string;
  default?: boolean;
  onClickCallback?: () => void;
}
const DEFAULT_BUTTON_OUTLINE: ICustomButtonProps = {
  label: "Default",
  color: "bg-white",
  borderRadius: "rounded-xl",
  textColor: "enabled:text-default",
  border: "border border-border",
  textSize: "text-sm leading-[14px] font-semibold",
  onHover: "enabled:hover:border-hover",
  onActive:
    "enabled:active:bg-button-active enabled:active:bg-opacity-[0.15] enabled:active:border-border-active:border-opacity-[0.15]",
  isDisabled: false,
  contentPosition: "justify-center",
  width: "w-full",
};

const DEFAULT_BUTTON: ICustomButtonProps = {
  label: "Default",
  color: "bg-btn-default",
  borderRadius: "rounded-md",
  textColor: "enabled:text-btn-default",
  textSize: "text-sm leading-[14px] font-medium",
  border: "border border-border",
  onHover: "enabled:hover:bg-btn-default-hover enabled:hover:border-hover",
  onActive: "enabled:active:bg-btn-default-active",
  isDisabled: false,
  contentPosition: "justify-center",
  width: "w-full",
};

const BaseButton: React.FC<ICustomButtonProps> = (
  props: ICustomButtonProps
) => {
  const { onClickCallback } = props;
  return (
    <button
      data-testid="base-button"
      disabled={props.isDisabled}
      onClick={() => {
        if (onClickCallback !== undefined) onClickCallback();
      }}
      className={`flex items-center gap-1 p-2 ${props.contentPosition} ${props.width} ${props.textSize} 
         ${props.color} ${props.textColor} ${props.onHover} ${props.border} ${props.onActive} ${props.borderRadius} ${props.extraAttributes}`}
    >
      {props.label}
    </button>
  );
};

export const Button: React.FC<ICustomButtonProps> = (
  props: ICustomButtonProps
) => {
  return <BaseButton {...DEFAULT_BUTTON} {...props} />;
};

export const OutlineButton: React.FC<ICustomButtonProps> = (
  props: ICustomButtonProps
) => {
  return <BaseButton {...DEFAULT_BUTTON_OUTLINE} {...props} />;
};
