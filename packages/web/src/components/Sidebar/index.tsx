import { useState } from "react";
import { BiChevronsLeft, BiMenu } from "react-icons/bi";
import { CgCardClubs } from "react-icons/cg";
import { GiCardBurn, GiPapers } from "react-icons/gi";
import { HiOutlinePlusSm } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useWindowWidth } from "../../hooks/useScreenWidth";
import Button from "../Button";
import CardForm from "../CardForm";
import FormModal from "../FormModal";
import SidebarButton from "./SidebarButton";
import SidebarMobileButton from "./SidebarMobileButton";

function SideBar() {
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const screenWidth = useWindowWidth();
  console.log(screenWidth);

  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const openHandler = () => {
    setOpen((prevState) => !prevState);
  };

  const buttons = [
    {
      text: "Home",
      icon: <IoHomeOutline size="25px" />,
      pathLocation: "/home",
      onClick: () => {
        navigate("/home");
      },
    },
    {
      text: "Meus decks",
      icon: <GiCardBurn size="25px" />,
      pathLocation: "/mydecks",
      onClick: () => {
        navigate("/mydecks");
      },
    },
    {
      text: "Meus cards",
      icon: <CgCardClubs size="25px" />,
      pathLocation: "/mycards",
      onClick: () => {
        navigate("/mycards");
      },
    },
    {
      text: "Revisões",
      icon: <GiPapers size="25px" />,
      pathLocation: "/revisions",
      onClick: () => {
        navigate("/revisions");
      },
    },
  ];

  return (
    <>
      {screenWidth > 500 ? (
        <nav
          className={`flex flex-col min-h-screen transition-all bg-white ${
            open ? "w-[250px]" : "w-[50px]"
          } `}
        >
          <div className="relative">
            <h3
              className={`text-left text-3xl font-bold  p-3 ${
                !open && "invisible"
              }`}
            >
              Cards
            </h3>

            <button
              type="button"
              onClick={openHandler}
              className={`absolute top-[15px] ${
                open ? "right-[10px]" : "right-[50%] translate-x-[50%]"
              } w-8 h-8 rounded-full transition-all hover:bg-slate-200`}
            >
              {open ? (
                <BiChevronsLeft className=" w-[100%] h-[100%]" />
              ) : (
                <BiMenu className=" w-[100%] h-[100%]" />
              )}
            </button>
          </div>
          {buttons.map(({
            text, icon, onClick, pathLocation
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
          ))}
          <Button onClick={openModalHandler} className="mt-auto m-1 flex-center whitespace-nowrap">
            {open ? "Criar Card" : <HiOutlinePlusSm size="25px" />}
          </Button>
        </nav>
      ) : (
        <nav
          className="fixed bottom-0 w-full flex transition-all h-[40px] bg-white z-20"
        >
          {buttons.map(({
            text, icon, onClick, pathLocation
          }) => (
            <SidebarMobileButton
              key={text}
              icon={icon}
              pathLocation={pathLocation}
              onClick={onClick}
            />
          ))}
        </nav>
      )}
      <FormModal open={openModal}>
        <CardForm onCloseModal={closeModalHandler} />
      </FormModal>
    </>
  );
}

export default SideBar;
