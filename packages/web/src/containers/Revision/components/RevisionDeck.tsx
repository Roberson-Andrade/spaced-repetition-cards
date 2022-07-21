import React from "react";
import { useStore } from "../../../store";
import { Deck } from "../../../types";
import RevisionDeckItem from "./RevisionDeckItem";

type RevisionDeckProps = {
  items: Deck[]
  onClick: (event: React.MouseEvent<HTMLButtonElement>, index: number) => void;
}

function RevisionDeck({ items, onClick }: RevisionDeckProps) {
  const cards = useStore((state) => state.cards);
  return (
    <div className="h-full w-full max-w-[1000px] p-5 mx-5 rounded-md">
      <div className="flex items-center justify-between">
        <h3 className="text-xl">Decks</h3>
        <p className="flex font-medium">
          Total de cards:
          {" "}
          {cards.length}
        </p>
      </div>
      <ul className="mt-4 h-[85vh] max-h-full overflow-y-auto">
        {items.map((deck, i) => (
          <RevisionDeckItem
            key={deck.id}
            item={deck}
            onClick={(event) => {
              onClick(event, i);
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default RevisionDeck;
