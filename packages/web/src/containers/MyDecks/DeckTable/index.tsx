import { useState } from "react";
import Button from "../../../components/Button";
import FormModal from "../../../components/FormModal";
import { Deck } from "../../../types";
import DeckItem from "../DeckItem";
import DeckForm from "../form";

type DeckTableProps = {
  items: Deck[]
}

function DeckTable({ items }:DeckTableProps) {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div className="h-[calc(100vh_-_40px)] w-[100%] max-w-[800px] mt-5 px-5">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl">
            Meus decks
          </h3>
          <Button onClick={openModalHandler}>
            Criar deck
          </Button>
        </div>
        <ul data-testid="deck-list" className="mt-4 max-h-full overflow-y-auto 3sm:overflow-visible sm:pb-10 sm:max-h-max">
          {items.map((deck:Deck) => <DeckItem key={deck.id} item={deck} />)}
        </ul>
      </div>
      <FormModal open={openModal}>
        <DeckForm onCloseModal={closeModalHandler} />
      </FormModal>
    </>
  );
}

export default DeckTable;
