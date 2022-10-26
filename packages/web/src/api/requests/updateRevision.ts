import { format } from "date-fns";
import { Callback, ZustandSet } from "../../store/types";
import { updateRevisionStore, updateRevisionStats } from "../../store/utils";
import { RevisionRequest, CardType } from "../../types";
import { axiosInstance } from "../axios";

export const updateRevision = async (
  cardIds: string[],
  deckId: string,
  callback: Callback,
  set: ZustandSet
) => {
  const revisionDate = format(new Date(), "yyyy-MM-dd");

  const revision: RevisionRequest = {
    numberOfRevision: cardIds.length,
    revisionDate
  };

  const reqOptions = {
    url: "/revision",
    method: "POST",
    data: {
      cardIds,
      revision
    },
  };

  try {
    await axiosInstance.request(reqOptions);

    callback(null);

    set((state) => ({
      cards: updateRevisionStore(state.cards, cardIds),
      decks: state.decks.map((deck) => {
        if (deck.id === deckId) {
          const updatedCards = updateRevisionStore(deck.cards as CardType[], cardIds);
          return {
            ...deck,
            overdueCards: deck.overdueCards as number - cardIds.length,
            cards: updatedCards
          };
        }
        return deck;
      }),
      revisionStats: updateRevisionStats(state.revisionStats, {
        date: new Date(),
        numberOfRevisedCards: cardIds.length
      })
    }));
  } catch (error) {
    callback((error as Error).message);
  }
};
