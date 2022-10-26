import { CallbackWithData, ZustandSet } from "../../store/types";
import { Deck } from "../../types";
import { axiosInstance } from "../axios";

export const createDeck = async (
  deckData:
    { name: string, category: string },
  callback: CallbackWithData,
  set: ZustandSet
) => {
  const reqOptions = {
    url: "/decks",
    method: "POST",
    data: deckData
  };

  try {
    const { data: createdDeck } = await axiosInstance.request<Deck>(reqOptions);

    set((state) => ({ decks: [...state.decks, createdDeck] }));
    callback(null, true);
  } catch (error) {
    callback((error as Error).message, false);
  }
};
