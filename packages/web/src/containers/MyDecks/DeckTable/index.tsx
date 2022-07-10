import Button from '../../../components/Button';
import { Deck } from '../../../types';
import DeckItem from '../DeckItem';

type DeckTableProps = {
  items: Deck[]
}

function DeckTable({ items }:DeckTableProps) {
  return (
    <div className="h-[100%] w-[100%] max-w-[800px] max-h-[80vh] px-5">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl">
          Meus decks
        </h3>
        <Button>
          Criar deck
        </Button>
      </div>
      <ul className="mt-4">
        {items.map((deck:Deck) => <DeckItem key={deck.id} item={deck} />)}
      </ul>
    </div>
  );
}

export default DeckTable;
