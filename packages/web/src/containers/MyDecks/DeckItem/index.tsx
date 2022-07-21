import { IoMdTrash } from "react-icons/io";
import Badge from "../../../components/Badge";
import IconButton from "../../../components/IconButton";
import { useStore } from "../../../store";
import { Deck } from "../../../types";

type DeckItemProps = {
    item: Deck
}

function DeckItem({ item: { name, category, id } }:DeckItemProps) {
  const deleteDeck = useStore((state) => state.deleteDeck);
  const deleteDeckHandler = () => {
    deleteDeck(id);
  };
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

      <IconButton onClick={deleteDeckHandler} className="hover:bg-slate-100/10">
        <IoMdTrash className="inline-block" size="25px" />
      </IconButton>
    </li>
  );
}

export default DeckItem;
