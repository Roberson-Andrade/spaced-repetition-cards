import React from "react";
import { selectColorBtn } from "./utils";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "warning" | "error" | "success" | "info";
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({
  children,
  variant,
  type = "button",
  className,
  disabled,
  onClick,
}: ButtonProps) {
  const variantColor = selectColorBtn(variant);
  const disabledClass = disabled && "btn-disabled";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-3 py-2 rounded-md font-semibold ${disabledClass || variantColor} ${disabledClass} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
