import React from "react";

export type IconButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function IconButton({
  children,
  type = "button",
  className,
  onClick,
}: IconButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-center align-middle p-2 rounded-full transition-all ${className}`}
    >
      {children}
    </button>
  );
}

export default IconButton;
