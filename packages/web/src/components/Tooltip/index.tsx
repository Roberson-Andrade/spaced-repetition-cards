import React, { useState } from "react";

export type TooltipProps = {
  children: React.ReactElement;
  text: string;
  variant?: "info-xl";
  className?: string;
}

function Tooltip({
  children, text, variant, className
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  let classVariant = "";

  switch (variant) {
    case "info-xl":
      classVariant = "text-white bg-black text-[12px] whitespace-nowrap p-1";
      break;

    default:
      classVariant = "text-white bg-[#8d8a8a] text-[11px] whitespace-nowrap  p-1 ";
      break;
  }

  const setTooltipVisible = () => {
    setVisible(true);
  };

  const setTooltipInvisible = () => {
    setVisible(false);
  };

  return (
    <div className={`relative flex-center ${className}`}>
      <div className={`absolute top-[-2rem] rounded-md transition-all duration-[400ms] font-medium z-50 ${visible ? "opacity-100" : "opacity-0"} pointer-events-none ${classVariant}`}>
        <p>{text}</p>
      </div>
      <div onMouseEnter={setTooltipVisible} onMouseLeave={setTooltipInvisible}>
        {children}
      </div>
    </div>
  );
}

export default Tooltip;
