import DeckTable from "./DeckTable";

const deckItems = [
  {
    id: "1",
    name: "Cinemática",
    category: "Física",
  },
  {
    id: "2",
    name: "Eletromagnetismo",
    category: "Física",
  },
  {
    id: "3",
    name: "Past Perfect",
    category: "Inglês",
  },
  {
    id: "4",
    name: "Cinemática",
    category: "Física",
  },
  {
    id: "5",
    name: "Eletromagnetismo",
    category: "Física",
  },
  {
    id: "6",
    name: "Past Perfect",
    category: "Inglês",
  },
  {
    id: "7",
    name: "Cinemática",
    category: "Física",
  },
  {
    id: "8",
    name: "Eletromagnetismo",
    category: "Física",
  },
  {
    id: "9",
    name: "Past Perfect",
    category: "Inglês",
  },
  {
    id: "10",
    name: "Past Perfect",
    category: "Inglês",
  },
];

function MyDecks() {
  return (
    <div className="flex-center flex-grow bg-[#F7F8FA]">
      <DeckTable items={deckItems} />
    </div>
  );
}

export default MyDecks;
