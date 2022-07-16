import { MdKeyboardArrowRight } from "react-icons/md";
import Badge from "../../../components/Badge";
import IconButton from "../../../components/IconButton";
import { Deck } from "../../../types";

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

      <IconButton className="hover:bg-slate-100/10">
        <MdKeyboardArrowRight className="inline-block" size="25px" />
      </IconButton>
    </li>
  );
}

export default DeckItem;
