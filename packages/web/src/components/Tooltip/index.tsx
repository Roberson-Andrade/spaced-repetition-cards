import React, { useState } from "react";

type TooltipProps = {
  children: React.ReactElement;
  text: string;
  variant?: "info-xl";
}

function Tooltip({ children, text, variant }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  let classVariant = "";

  switch (variant) {
    case "info-xl":
      classVariant = "text-white bg-black text-[11px] w-[200px] p-1";
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
    <div className="relative flex-center">
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
