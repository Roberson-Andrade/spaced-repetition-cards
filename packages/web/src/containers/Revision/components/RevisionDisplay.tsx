import React, { useEffect, useState } from "react";
import Card from "../../../components/Card";
import { CardType } from "../../../types";

type RevisionDisplayProps = {
  items: CardType[],
  stopRevision: () => void;
}

function RevisionDisplay({ items, stopRevision }: RevisionDisplayProps) {
  const [selected, setSelected] = useState(0);
  const [cards, setCards] = useState(items);

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

  const successClickHandler = (event: React.MouseEvent, cardIndex: number) => {
    event.stopPropagation();
    setCards((prevState) => {
      const newState = [...prevState];
      newState.splice(cardIndex, 1);
      return newState;
    });
  };

  const failClickHandler = (event: React.MouseEvent, cardIndex: number) => {
    event.stopPropagation();
    setCards((prevState) => {
      const newState = [...prevState];
      const [movedCard] = newState.splice(cardIndex, 1);
      newState.push(movedCard);
      return newState;
    });
  };

  useEffect(() => {
    if (!cards.length) {
      stopRevision();
    }
  }, [cards]);

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
              className="absolute left-[25%] max-h-[600px] max-w-[400px] blur-[1.5px] scale-90 -rotate-3"
              rotateDisabled
              disableFlipAnimation
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
              flipToggle
              showActionButtons
              onClickSuccessBtn={(event) => {
                successClickHandler(event, index);
              }}
              onClickFailBtn={(event) => {
                failClickHandler(event, index);
              }}
              className="absolute max-h-[600px] max-w-[400px] z-[1000] backdrop-blur-sm"
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
            className={`absolute right-[25%] max-h-[600px] max-w-[400px] z-[${(array.length - 1) - index}] scale-90 blur-[1.5px] rotate-3`}
            rotateDisabled
            disableFlipAnimation
            onClick={selectNext}
          />
        );
      }) }
    </div>
  );
}

export default RevisionDisplay;
