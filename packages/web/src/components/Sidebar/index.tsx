import React, { useState } from 'react';
import { BiChevronsLeft, BiMenu } from 'react-icons/bi';
import { GiCardBurn } from 'react-icons/gi';
import SidebarButton from './SidebarButton';

const buttons = [
  {
    text: 'Meus decks',
    icon: <GiCardBurn size="30px" />,
  },
];

function SideBar() {
  const [open, setOpen] = useState(true);

  const openHandler = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <nav className={`flex flex-col min-h-screen transition-all ${open ? 'w-[250px]' : 'w-[50px]'} bg-slate-400`}>
      <div className="relative">
        <h3 className={`text-left text-3xl font-bold text-white p-3 ${!open && 'invisible'}`}>
          Cards
        </h3>

        <button
          type="button"
          onClick={openHandler}
          className={`absolute top-[15px] ${open ? 'right-[-10px] bg-slate-500' : 'right-[50%] translate-x-[50%] bg-slate-400'} w-8 h-8 rounded-full  transition-all hover:bg-slate-700`}
        >
          {open
            ? <BiChevronsLeft className="text-white w-[100%] h-[100%]" />
            : <BiMenu className="text-white w-[100%] h-[100%]" />}
        </button>
      </div>
      {buttons.map(
        ({ text, icon }) => <SidebarButton icon={icon} showIcon={open}>{text}</SidebarButton>,
      )}
    </nav>
  );
}

export default SideBar;
