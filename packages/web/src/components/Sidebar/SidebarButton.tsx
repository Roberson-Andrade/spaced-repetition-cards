import React from "react";
import { useLocation } from "react-router-dom";

type SidebarButtonProps = {
  children: React.ReactNode;
  icon: React.ReactElement;
  pathLocation: string;
  onClick: () => void;
  showIcon: boolean;
}

function SidebarButton({
  children, icon, showIcon, onClick, pathLocation,
}: SidebarButtonProps) {
  const location = useLocation();

  const isActive = location.pathname === pathLocation;

  return (
    <button type="button" onClick={onClick} className={`flex h-[40px] transition-all p-2 hover:bg-slate-200 ${isActive ? "border-r-2 border-solid border-slate-700" : ""}`}>
      <div className="flex">
        <div className={`${showIcon ? "mr-6" : ""} ml-1`}>
          {icon}
        </div>

        {showIcon && (
        <p className="w-[160px] text-start">
          {children}
        </p>
        )}
      </div>
    </button>
  );
}

export default SidebarButton;
