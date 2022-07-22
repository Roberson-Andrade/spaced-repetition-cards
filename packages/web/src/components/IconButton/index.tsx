import React from "react";

export type IconButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function IconButton({
  children,
  type = "button",
  className,
  disabled,
  onClick,
}: IconButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`text-center align-middle p-2 rounded-full transition-all ${disabled ? "[&_*]:opacity-50" : ""} ${className}`}
    >
      {children}
    </button>
  );
}

export default IconButton;
