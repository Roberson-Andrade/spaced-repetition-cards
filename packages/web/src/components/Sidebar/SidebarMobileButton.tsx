import React from "react";
import { useLocation } from "react-router-dom";

type SidebarMobileButtonProps = {
  icon: React.ReactElement;
  pathLocation: string;
  onClick: () => void;
}

function SidebarMobileButton({
  icon, onClick, pathLocation,
}: SidebarMobileButtonProps) {
  const location = useLocation();

  const isActive = location.pathname === pathLocation;

  return (
    <button type="button" onClick={onClick} className={`flex-center box-border w-full hover:bg-slate-200 ${isActive ? "border-t-2 border-solid border-slate-700" : ""}`}>
      <div>
        {icon}
      </div>
    </button>
  );
}

export default SidebarMobileButton;
