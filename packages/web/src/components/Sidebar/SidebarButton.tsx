import React from 'react';

type SidebarButtonProps = {
  children: React.ReactNode;
  icon: React.ReactElement;
  showIcon: boolean;
}

function SidebarButton({ children, icon, showIcon }: SidebarButtonProps) {
  return (
    <button type="button" className="flex text-center items-center h-[46px] bg-slate-400 text-white hover:bg-slate-500 transition-all p-2">
      <div className="mr-2">
        {icon}
      </div>
      {showIcon && children}
    </button>
  );
}

export default SidebarButton;
