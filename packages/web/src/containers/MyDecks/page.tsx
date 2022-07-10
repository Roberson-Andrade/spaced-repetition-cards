import DeckTable from './DeckTable';

const deckItems = [
  {
    id: '1',
    name: 'Cinemática',
    category: 'Física',
  },
  {
    id: '2',
    name: 'Eletromagnetismo',
    category: 'Física',
  },
  {
    id: '3',
    name: 'Past Perfect',
    category: 'Inglês',
  },
];

function MyDecks() {
  return (
    <div className="flex justify-center items-center flex-grow">
      <DeckTable items={deckItems} />
    </div>
  );
}

export default MyDecks;
