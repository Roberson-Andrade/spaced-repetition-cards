import { useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { VscLoading } from "react-icons/vsc";
import { toast } from "react-toastify";
import Badge from "../../../components/Badge";
import IconButton from "../../../components/IconButton";
import { defaultToast } from "../../../constants/toastify";
import { useStore } from "../../../store";
import { Deck } from "../../../types";

type DeckItemProps = {
    item: Deck
}

function DeckItem({ item: { name, category, id } }:DeckItemProps) {
  const [loading, setLoading] = useState(false);
  const deleteDeck = useStore((state) => state.deleteDeck);
  const deleteDeckHandler = () => {
    setLoading(true);

    deleteDeck(id, (error) => {
      setLoading(false);
      if (error) {
        toast.error(error, defaultToast);
        return;
      }

      toast.success("Deck deletado com sucesso!", defaultToast);
    });
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
        {loading ? <VscLoading size="25px" className="animate-spin" /> : <IoMdTrash className="inline-block" size="25px" />}
      </IconButton>
    </li>
  );
}

export default DeckItem;
