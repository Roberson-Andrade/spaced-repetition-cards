import React, { useState } from "react";

type TooltipProps = {
  children: React.ReactElement;
  text: string;
}

function Tooltip({ children, text }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  const setTooltipVisible = () => {
    setVisible(true);
  };

  const setTooltipInvisible = () => {
    setVisible(false);
  };

  return (
    <div className="relative flex-center">
      <div className={`absolute top-[-2rem] p-1 text-white bg-[#8d8a8a] text-[11px] rounded-md whitespace-nowrap transition-all duration-[400ms] font-medium z-50 ${visible ? "opacity-100" : "opacity-0"} pointer-events-none`}>
        <p>{text}</p>
      </div>
      <div onMouseEnter={setTooltipVisible} onMouseLeave={setTooltipInvisible}>
        {children}
      </div>
    </div>
  );
}

export default Tooltip;
