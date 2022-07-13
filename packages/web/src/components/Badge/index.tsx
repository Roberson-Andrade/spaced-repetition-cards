/* eslint-disable react/require-default-props */
import React from "react";

type BadgeProps = {
    children?: React.ReactNode;
}

function Badge({ children }: BadgeProps) {
  return (
    <div className="text-[12px] px-2 rounded-full bg-blue-400 shadow-md font-semibold text-white">
      <p>{children}</p>
    </div>
  );
}

export default Badge;
