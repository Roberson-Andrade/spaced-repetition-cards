import { ChangeEvent, useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CardForm from "../../components/CardForm";
import FormModal from "../../components/FormModal";
import Input from "../../components/Input";
import { useWindowWidth } from "../../hooks/useScreenWidth";
import { useStore } from "../../store";
import { CardType } from "../../types";

function MyCards() {
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const screenWidth = useWindowWidth();
  const cards = useStore((state) => state.cards);
  const changeSearchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const filterBySearchValue = (card: CardType) => {
    if (!searchValue) {
      return card;
    }

    return card.front.toLowerCase().includes(searchValue.toLowerCase());
  };

  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="flex flex-grow flex-col gap-3 media-sidebar p-2 2sm:pb-16 bg-gradient-to-r backdrop-blur-xl from-[#e2e3e4] to-[#acbecd]">
        <header className="flex items-center gap-6 2sm:gap-2 justify-between">
          {screenWidth > 500 && <h2 className="text-2xl font-semibold">Cards</h2>}
          <Input
            id="search"
            type="text"
            className="flex-grow"
            variant="search"
            value={searchValue}
            onChange={changeSearchHandler}
          />
          <Button onClick={openModalHandler}>
            {screenWidth > 550 ? "Criar Cards" : <HiOutlinePlusSm size="25px" />}
          </Button>
        </header>
        <div className="max-h-[90vh] sm:max-h-[85vh] overflow-y-auto">
          <div className="grid auto-rows-auto grid-cols-autoFitCard gap-3 md:justify-center p-3">
            {cards.filter(filterBySearchValue).map(({
              front,
              back,
              id,
              deckName,
              tag,
              createdAt
            }) => (
              <Card
                key={id}
                front={front}
                back={back}
                deckName={deckName}
                tag={tag}
                createdAt={createdAt}
                className="h-[300px]"
              />
            )) }
          </div>
        </div>
      </div>
      <FormModal open={openModal}>
        <CardForm onCloseModal={closeModalHandler} />
      </FormModal>
    </>
  );
}

export default MyCards;
