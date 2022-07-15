/* eslint-disable react/require-default-props */
import React from "react";

type BadgeProps = {
    children?: React.ReactNode;
    className?: string;
}

function Badge({ children, className }: BadgeProps) {
  return (
    <div className={`text-[12px] px-2 rounded-full bg-blue-400 shadow-md font-semibold text-white ${className}`}>
      <p>{children}</p>
    </div>
  );
}

export default Badge;
