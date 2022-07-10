import { BsArrowRightShort } from 'react-icons/bs';
import Badge from '../../../components/Badge';
import { Deck } from '../../../types';

type DeckItemProps = {
    item: Deck
}

function DeckItem({ item: { name, category } }:DeckItemProps) {
  return (
    <li
      className="flex items-center justify-between bg-slate-600 text-white rounded-md px-5 py-5 my-3"
    >
      <div className="flex items-center">
        <p className="mr-3">
          {name}
        </p>
        <Badge>
          {category}
        </Badge>
      </div>

      <button
        type="button"
        className="text-center align-middle w-8 h-8 rounded-full transition-all hover:bg-slate-100/10"
      >
        <BsArrowRightShort className="inline-block" size="25px" />
      </button>
    </li>
  );
}

export default DeckItem;
