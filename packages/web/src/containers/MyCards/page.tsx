import Card from "../../components/Card";
import { CardType } from "../../types";

const mockCards: CardType[] = [
  {
    id: "1",
    deckId: "d1",
    front: "Quanto é 1 + 1 ?",
    back: "É 2.",
    tag: "Algebra",
    deckName: "Matemática",
    createdAt: "07/06/2022"
  },
  {
    id: "2",
    deckId: "d2",
    front: "Qual a raiz quadrade de 9?",
    back: "é 3",
    tag: "Algebra",
    deckName: "Matemática",
    createdAt: "07/06/2022"
  },
  {
    id: "3",
    deckId: "d3",
    front: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida id augue in sodales?",
    back: "Sed et posuere diam. Maecenas sed tincidunt ante, non tincidunt neque.",
    tag: "Ipsum",
    deckName: "Lorem",
    createdAt: "07/06/2022"
  }
];

function MyCards() {
  return (
    <div className="flex flex-grow bg-[#F7F8FA] gap-3 p-5 flex-wrap">
      {mockCards.map(({
        front,
        back,
        id,
        deckName,
        tag,
        createdAt
      }) => (
        <Card
          key={id}
          front={front}
          back={back}
          deckName={deckName}
          tag={tag}
          createdAt={createdAt}
        />
      )) }
    </div>
  );
}

export default MyCards;
