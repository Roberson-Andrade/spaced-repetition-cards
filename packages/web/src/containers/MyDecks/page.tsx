import { useStore } from "../../store";
import DeckTable from "./DeckTable";

function MyDecks() {
  const deckItems = useStore((state) => state.decks);
  return (
    <div className="flex justify-center flex-grow bg-[#F7F8FA]">
      <DeckTable items={deckItems} />
    </div>
  );
}

export default MyDecks;
