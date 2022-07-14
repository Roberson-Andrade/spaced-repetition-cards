import { useState } from "react";
import Card from "../../components/Card";
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
  },
];
function Revision() {
  const [selected, setSelected] = useState(0);

  const selectNext = () => {
    if (selected === mockCards.length) {
      return;
    }
    setSelected((previousState) => previousState + 1);
  };

  const selectPrevious = () => {
    if (selected === 0) {
      return;
    }
    setSelected((previousState) => previousState - 1);
  };

  return (
    <div className="flex-center flex-grow bg-gradient-to-r backdrop-blur-xl from-[#e2e3e4] to-[#acbecd] gap-3 p-5 flex-wrap">
      <div className="relative w-full h-full flex-center">
        {mockCards.map(({
          id,
          front,
          back,
          deckName,
          tag,
          createdAt
        }, index, array) => {
          if (index < selected) {
            return (
              <Card
                key={id}
                front={front}
                back={back}
                deckName={deckName}
                tag={tag}
                createdAt={createdAt}
                className="absolute left-[25%] max-h-[500px] max-w-[300px] blur-[1.5px] -rotate-3 transition-transform"
                rotateDisabled
                onClick={selectPrevious}
              />
            );
          }
          if (selected === index) {
            return (
              <Card
                key={id}
                front={front}
                back={back}
                deckName={deckName}
                tag={tag}
                createdAt={createdAt}
                className="absolute max-h-[600px] max-w-[400px] z-[1000] backdrop-blur-sm transition-transform"
              />
            );
          }
          return (
            <Card
              key={id}
              front={front}
              back={back}
              deckName={deckName}
              tag={tag}
              createdAt={createdAt}
              className={`absolute right-[25%] max-h-[500px] max-w-[300px] z-[${(array.length - 1) - index}] blur-[1.5px] rotate-3 transition-transform`}
              rotateDisabled
              onClick={selectNext}
            />
          );
        }) }
      </div>
    </div>
  );
}

export default Revision;
