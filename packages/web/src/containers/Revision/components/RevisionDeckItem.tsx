import React from "react";
import { BiRevision } from "react-icons/bi";
import Badge from "../../../components/Badge";
import Tooltip from "../../../components/Tooltip";
import { Deck } from "../../../types";

type DeckItemProps = {
  item: Deck
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

function RevisionDeckItem({
  item: {
    name,
    category,
    totalCards,
    cardsOverDue
  },
  onClick
}:DeckItemProps) {
  return (
    <li
      className="flex items-center justify-between rounded-md px-5 py-5 my-3 bg-slate-600 text-white"
    >
      <div className="flex items-center">
        <p className="mr-3">
          {name}
        </p>
        <Badge>
          {category}
        </Badge>
      </div>

      <div className="flex items-center gap-5">
        <Tooltip text="Cards a revisar">
          <Badge className="bg-[#ffc107] p-2 w-[35px] flex-center text-[14px]">{cardsOverDue}</Badge>
        </Tooltip>
        <Tooltip text="Numero de cards">
          <Badge className="p-2 w-[35px] flex-center text-[14px]">{totalCards}</Badge>
        </Tooltip>

        <Tooltip text="Revisar">
          <button
            type="button"
            className="text-center align-middle p-2 rounded-full transition-all hover:bg-slate-100/10"
            onClick={onClick}
          >
            <BiRevision className="inline-block" size="25px" />
          </button>
        </Tooltip>
      </div>

    </li>
  );
}

export default RevisionDeckItem;
