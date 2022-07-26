import { isSameDay } from "date-fns";
import { CardType, RevisionStats } from "../types";

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

export const updateRevisionStats = (
  revisions: RevisionStats[],
  newRevision: RevisionStats
) => {
  const newRevisions = [...revisions];
  const revisionIndex = newRevisions.findIndex((revision) => isSameDay(
    revision.date,
    newRevision.date
  ));

  if (revisionIndex === -1) {
    return [...newRevisions, newRevision];
  }

  newRevisions[revisionIndex].numberOfRevisedCards += newRevision.numberOfRevisedCards;

  return newRevisions;
};
