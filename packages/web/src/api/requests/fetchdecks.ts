import { Callback, ZustandSet } from "../../store/types";
import { Deck, CardType } from "../../types";
import { axiosInstance } from "../axios";

export const fetchDecks = async (callback: Callback, set: ZustandSet) => {
  try {
    const { data } = await axiosInstance.get("/decks");

    const decks: Deck[] = data;

    const cards = decks.map((deck) => deck.cards).flat();

    callback(null);
    set({ decks, cards: cards as CardType[] });
  } catch (error) {
    callback((error as Error).message);
  }
};
