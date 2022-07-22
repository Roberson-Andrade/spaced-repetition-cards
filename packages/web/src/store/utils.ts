import { CardType } from "../types";

export const updateRevisionStore = (
  cards: CardType[],
  cardIds: string[]
): CardType[] => cards.map((card: CardType) => (cardIds.includes(card.id)
  ? {
    ...card,
    numberOfRevisions: card.numberOfRevisions as number + 1,
    revisionStatus: "UP_TO_DATE",
    lastRevision: new Date()
  }
  : { ...card }));
