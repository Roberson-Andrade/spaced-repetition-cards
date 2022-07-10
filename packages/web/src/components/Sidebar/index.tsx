import { useState } from 'react';
import { BiChevronsLeft, BiMenu } from 'react-icons/bi';
import { GiCardBurn } from 'react-icons/gi';
import { IoHomeOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import SidebarButton from './SidebarButton';

function SideBar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const openHandler = () => {
    setOpen((prevState) => !prevState);
  };

  const buttons = [
    {
      text: 'Home',
      icon: <IoHomeOutline size="25px" />,
      pathLocation: '/home',
      onClick: () => {
        navigate('/home');
      },
    },
    {
      text: 'Meus decks',
      icon: <GiCardBurn size="25px" />,
      pathLocation: '/mydecks',
      onClick: () => {
        navigate('/mydecks');
      },
    },
  ];

  return (
    <nav className={`flex flex-col min-h-screen transition-all ${open ? 'w-[250px]' : 'w-[50px]'} `}>
      <div className="relative">
        <h3 className={`text-left text-3xl font-bold  p-3 ${!open && 'invisible'}`}>
          Cards
        </h3>

        <button
          type="button"
          onClick={openHandler}
          className={`absolute top-[15px] ${open ? 'right-[10px]' : 'right-[50%] translate-x-[50%]'} w-8 h-8 rounded-full transition-all hover:bg-slate-200`}
        >
          {open
            ? <BiChevronsLeft className=" w-[100%] h-[100%]" />
            : <BiMenu className=" w-[100%] h-[100%]" />}
        </button>
      </div>
      {buttons.map(
        ({
          text, icon, onClick, pathLocation,
        }) => (
          <SidebarButton
            key={text}
            icon={icon}
            showIcon={open}
            pathLocation={pathLocation}
            onClick={onClick}
          >
            {text}
          </SidebarButton>
        ),
      )}
    </nav>
  );
}

export default SideBar;
