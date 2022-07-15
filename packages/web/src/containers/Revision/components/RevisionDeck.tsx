import React from "react";
import { Deck } from "../../../types";
import RevisionDeckItem from "./RevisionDeckItem";

type RevisionDeckProps = {
  items: Deck[]
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

function RevisionDeck({ items, onClick }: RevisionDeckProps) {
  return (
    <div className="h-full max-h-[800px] w-full max-w-[1000px] p-5 mx-5 rounded-md">
      <div className="flex items-center justify-between">
        <h3 className="text-xl">Decks</h3>
        <p className="flex font-medium">
          Total de cards: 200
        </p>
      </div>
      <ul className="mt-4 max-h-full">
        {items.map((deck) => (
          <RevisionDeckItem
            key={deck.id}
            item={deck}
            onClick={onClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default RevisionDeck;
