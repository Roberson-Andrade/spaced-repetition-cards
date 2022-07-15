import { useState } from "react";
import Card from "../../../components/Card";
import { CardType } from "../../../types";

type RevisionDisplayProps = {
  cards: CardType[],
}

function RevisionDisplay({ cards }: RevisionDisplayProps) {
  const [selected, setSelected] = useState(0);

  const selectNext = () => {
    if (selected === cards.length) {
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
    <div className="relative w-full h-full flex-center">
      {cards.map(({
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
  );
}

export default RevisionDisplay;
