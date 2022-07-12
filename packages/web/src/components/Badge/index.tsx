/* eslint-disable react/require-default-props */
import React from "react";

type BadgeProps = {
    children?: React.ReactNode;
}

function Badge({ children }: BadgeProps) {
  return (
    <div className="bg- text-[12px] px-2 rounded-full bg-blue-400 shadow-md">
      <p>{children}</p>
    </div>
  );
}

export default Badge;
