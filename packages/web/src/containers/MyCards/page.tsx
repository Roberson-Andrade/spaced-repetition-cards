import { ChangeEvent, useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CardForm from "../../components/CardForm";
import FormModal from "../../components/FormModal";
import Input from "../../components/Input";
import { useWindowWidth } from "../../hooks/useScreenWidth";
import { CardType } from "../../types";

const mockCards: CardType[] = [
  {
    id: "1",
    deckId: "d1",
    front: "Quanto é 1 + 1 ?",
    back: "É 2.",
    tag: "Algebra",
    deckName: "Matemática",
    createdAt: "07/06/2022"
  },
  {
    id: "2",
    deckId: "d2",
    front: "Qual a raiz quadrade de 9?",
    back: "é 3",
    tag: "Algebra",
    deckName: "Matemática",
    createdAt: "07/06/2022"
  },
  {
    id: "3",
    deckId: "d3",
    front: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida id augue in sodales?",
    back: "Sed et posuere diam. Maecenas sed tincidunt ante, non tincidunt neque.",
    tag: "Ipsum",
    deckName: "Lorem",
    createdAt: "07/06/2022"
  }
];

function MyCards() {
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const screenWidth = useWindowWidth();

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
      <div className="flex flex-grow flex-col gap-3 bg-[#F7F8FA] media-sidebar p-2 2sm:pb-16">
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
        <div className="grid auto-rows-auto grid-cols-autoFitCard gap-3 md:justify-center">
          {mockCards.filter(filterBySearchValue).map(({
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
      <FormModal open={openModal}>
        <CardForm onCloseModal={closeModalHandler} />
      </FormModal>
    </>
  );
}

export default MyCards;
