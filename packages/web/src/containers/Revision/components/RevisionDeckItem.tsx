import React from "react";
import { BiRevision } from "react-icons/bi";
import Badge from "../../../components/Badge";
import IconButton from "../../../components/IconButton";
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
    overdueCards
  },
  onClick
}:DeckItemProps) {
  return (
    <li
      className="flex sm:flex-col sm:gap-5 items-center justify-between rounded-md px-5 py-5 my-3 bg-slate-600 text-white"
    >
      <div className="flex items-center sm:w-full sm:justify-between">
        <p className="mr-3">
          {name}
        </p>
        <Badge>
          {category}
        </Badge>
      </div>

      <div className="flex items-center gap-5 sm:w-full">
        <Tooltip text="Cards a revisar">
          <Badge className="bg-[#ffc107] p-2 w-[35px] flex-center text-[14px]">{overdueCards}</Badge>
        </Tooltip>
        <Tooltip text="Numero de cards">
          <Badge className="p-2 w-[35px] flex-center text-[14px]">{totalCards}</Badge>
        </Tooltip>

        <Tooltip text="Revisar" className="sm:ml-auto">
          <IconButton
            onClick={onClick}
            className="hover:bg-slate-100/10"
          >
            <BiRevision className="inline-block" size="25px" />
          </IconButton>
        </Tooltip>
      </div>

    </li>
  );
}

export default RevisionDeckItem;
