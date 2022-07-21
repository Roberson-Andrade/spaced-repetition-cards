import React, { useEffect, useState } from "react";
import Card from "../../../components/Card";
import { useWindowWidth } from "../../../hooks/useScreenWidth";
import { CardType } from "../../../types";

type RevisionDisplayProps = {
  items: CardType[],
  stopRevision: () => void;
}

function RevisionDisplay({ items, stopRevision }: RevisionDisplayProps) {
  const [selected, setSelected] = useState(0);
  const [cards, setCards] = useState(items);
  const screenWidth = useWindowWidth();

  const selectNext = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (selected === cards.length) {
      return;
    }
    setSelected((previousState) => previousState + 1);
  };

  const selectPrevious = (event: React.MouseEvent) => {
    event.stopPropagation();
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
      if (cardIndex === cards.length - 1 && cardIndex !== 0) {
        setSelected((previousState) => previousState - 1);
      }
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
    <div className="relative w-full h-full 3sm:h-[calc(100vh_-_120px)] flex-center">
      {cards.map(({
        id,
        front,
        back,
        deckName,
        tag,
        createdAt
      }, index, array) => {
        if (index < selected && screenWidth > 600) {
          return (
            <Card
              key={id}
              front={front}
              back={back}
              deckName={deckName}
              tag={tag}
              createdAt={createdAt}
              className="absolute left-[20%] 2xl:left-[15%] xl:left-[10%] lg:left-[5%] md:-left-[3.5%] max-h-[600px] max-w-[400px] blur-[1.5px] scale-90 -rotate-3"
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
              showLeftButton={index !== 0 && screenWidth < 600}
              showRightButton={index !== array.length - 1 && screenWidth < 600}
              onClickSuccessBtn={(event) => {
                successClickHandler(event, index);
              }}
              onClickFailBtn={(event) => {
                failClickHandler(event, index);
              }}
              onClickNextBtn={selectNext}
              onClickPreviousBtn={selectPrevious}
              className="absolute max-h-[600px] max-w-[400px] z-[1000] backdrop-blur-sm"
            />
          );
        }
        return screenWidth > 600 ? (
          <Card
            key={id}
            front={front}
            back={back}
            deckName={deckName}
            tag={tag}
            createdAt={createdAt}
            className={`absolute right-[20%] 2xl:right-[15%] xl:right-[10%] lg:right-[5%] md:-right-[3.5%] max-h-[600px] max-w-[400px] z-[${(array.length - 1) - index}] scale-90 blur-[1.5px] rotate-3`}
            rotateDisabled
            disableFlipAnimation
            onClick={selectNext}
          />
        ) : null;
      }) }
    </div>
  );
}

export default RevisionDisplay;
