import { useState } from "react";
import { CardType, Deck } from "../../types";
import RevisionDeck from "./components/RevisionDeck";
import RevisionDisplay from "./components/RevisionDisplay";

const deckItems: Deck[] = [
  {
    id: "1",
    name: "Cinemática",
    category: "Física",
    totalCards: 35,
    cardsOverDue: 17,
    createdAt: "06/07/2022"
  },
  {
    id: "2",
    name: "Eletromagnetismo",
    category: "Física",
    totalCards: 20,
    cardsOverDue: 5,
    createdAt: "03/05/2022"
  },
  {
    id: "3",
    name: "Past Perfect",
    category: "Inglês",
    totalCards: 150,
    cardsOverDue: 30,
    createdAt: "04/06/2022"
  },
];

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
  const [startRevision, setStartRevision] = useState(false);

  return (
    <div className="flex-center flex-grow bg-gradient-to-r backdrop-blur-xl from-[#e2e3e4] to-[#acbecd] gap-3 p-5 flex-wrap">
      <div className="h-full max-h-[800px] w-full max-w-[1000px] p-5 mx-5 rounded-md">
        <div className="flex items-center justify-between">
          <h3 className="text-xl">Decks</h3>
          <p className="flex font-medium gap-3">
            Total de cards: 200
          </p>
        </div>
        <ul className="mt-4 max-h-full">
          {deckItems.map((deck:Deck) => <RevisionDeck key={deck.id} item={deck} />)}
        </ul>
      </div>
      {startRevision && <RevisionDisplay cards={mockCards} />}
    </div>
  );
}

export default Revision;
