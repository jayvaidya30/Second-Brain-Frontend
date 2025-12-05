import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};

const defaultStyles = "px-4 py-2 rounded-md flex items-center";

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className={variantStyles[props.variant] + " " + defaultStyles}>
      <div className="pr-2">{props.startIcon}</div>
      {props.text}
    </button>
  );
};
