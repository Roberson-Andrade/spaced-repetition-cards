import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import { useWindowWidth } from "../../../hooks/useScreenWidth";
import { CardType, RevisionRequestDataType } from "../../../types";

type RevisionDisplayProps = {
  items: CardType[];
  stopRevision: (
    requestData: RevisionRequestDataType,
    allCardsFinished?: boolean
  ) => void;
};

function RevisionDisplay({ items, stopRevision }: RevisionDisplayProps) {
  const [selected, setSelected] = useState(0);
  const [cards, setCards] = useState(items);
  const [deckId] = useState(items[0].deckId);
  const [revisedCards, setRevisedCards] = useState<string[]>([]);
  const screenWidth = useWindowWidth();

  const selectNext = (event: React.MouseEvent | globalThis.KeyboardEvent) => {
    event.stopPropagation();

    setSelected((previousState) => {
      if (previousState + 1 === cards.length) {
        return previousState;
      }
      return previousState + 1;
    });
  };

  const selectPrevious = (
    event: React.MouseEvent | globalThis.KeyboardEvent
  ) => {
    event.stopPropagation();

    setSelected((previousState) => {
      if (previousState === 0) {
        return previousState;
      }
      return previousState - 1;
    });
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
    setRevisedCards((prevState) => [...prevState, cards[cardIndex].id]);
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
    const amazonasQuer = (event: globalThis.KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        selectNext(event);
      }

      if (event.key === "ArrowLeft") {
        selectPrevious(event);
      }
    };

    window.addEventListener("keydown", amazonasQuer);

    return () => {
      window.removeEventListener("keydown", amazonasQuer);
    };
  }, []);

  useEffect(() => {
    if (!cards.length) {
      stopRevision({ revisedCards, deckId }, true);
    }
  }, [cards]);

  return (
    <>
      <div className="relative w-full h-full 3sm:h-[calc(100vh_-_120px)] flex-center">
        {cards.map(
          ({ id, front, back, deckName, tag, createdAt }, index, array) => {
            if (index < selected && screenWidth > 600) {
              return (
                <Card
                  key={id}
                  front={front}
                  back={back}
                  deckName={deckName}
                  tag={tag}
                  createdAt={createdAt}
                  className="absolute -translate-x-[40%] max-h-[600px] max-w-[400px] blur-[1.5px] scale-90 -rotate-3"
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
                  showRightButton={
                    index !== array.length - 1 && screenWidth < 600
                  }
                  onClickSuccessBtn={(event) => {
                    successClickHandler(event, index);
                  }}
                  onClickFailBtn={(event) => {
                    failClickHandler(event, index);
                  }}
                  onClickNextBtn={selectNext}
                  onClickPreviousBtn={selectPrevious}
                  className="absolute translate-x-0 max-h-[600px] max-w-[400px] z-[1000] backdrop-blur-sm"
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
                className={`absolute translate-x-[40%] max-h-[600px] max-w-[400px] z-[${
                  array.length - 1 - index
                }] scale-90 blur-[1.5px] rotate-3`}
                rotateDisabled
                disableFlipAnimation
                onClick={selectNext}
              />
            ) : null;
          }
        )}
      </div>
      <Button
        className="2sm:mt-2"
        onClick={() => {
          stopRevision({ revisedCards, deckId }, false);
        }}
      >
        Parar revisão
      </Button>
    </>
  );
}

export default RevisionDisplay;
