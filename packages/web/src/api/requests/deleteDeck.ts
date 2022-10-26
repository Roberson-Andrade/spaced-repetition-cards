import { Callback, ZustandSet } from "../../store/types";
import { axiosInstance } from "../axios";

export const deleteDeck = async (deckId: string, callback: Callback, set: ZustandSet) => {
  const reqOptions = {
    url: `/decks/${deckId}`,
    method: "DELETE"
  };

  try {
    await axiosInstance.request(reqOptions);

    callback(null);

    set((state) => ({
      decks: state.decks.filter((deck) => deck.id !== deckId),
      cards: state.cards.filter((card) => card.deckId !== deckId)
    }));
  } catch (error) {
    callback((error as Error).message);
  }
};
