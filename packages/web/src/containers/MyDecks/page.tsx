import { useStore } from "../../store";
import DeckTable from "./DeckTable";

function MyDecks() {
  const deckItems = useStore((state) => state.decks);
  return (
    <div className="flex justify-center flex-grow bg-gradient-to-r backdrop-blur-xl from-[#e2e3e4] to-[#acbecd]">
      <DeckTable items={deckItems} />
    </div>
  );
}

export default MyDecks;
