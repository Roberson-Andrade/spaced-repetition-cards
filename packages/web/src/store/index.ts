import axios from "axios";
import create from "zustand";
import { CardData, CardType, Deck } from "../types";

type deckState = {
  decks: Deck[] | [];
  cards: CardType[] | []
  fetchDecks: (callback: (error: string | null) => void) => void;
  createDeck: (
    payload: { name: string, category: string },
    callback: (error: string | null, data: boolean) => void
  ) => void;
  deleteDeck: (
    deckId: string,
    callback: (error: string | null) => void
  ) => void;
  createCard: (cardData: CardData, callback: (error: string | null) => void) => void;
  fetchDecks: () => void;
  createDeck: (name: string, category: string) => void;
  deleteDeck: (deckId: string) => void;
  createCard: (cardData: CardData) => void;
}

export const useStore = create<deckState>()((set) => ({
  decks: [],
  cards: [],
  fetchDecks: async (callback) => {
    try {
      const { data } = await axios.get("http://127.0.0.1:3000/decks");
      const decks: Deck[] = data;
    const cards = decks.map((deck) => deck.cards).flat();
      callback(null);
    set({ decks, cards: cards as CardType[] });
    } catch (error) {
      callback((error as Error).message);
    }
  },
  createDeck: async (deckData, callback) => {
    const reqOptions = {
      url: "http://127.0.0.1:3000/decks",
      method: "POST",
      data: deckData
    };

    try {
      const { data: createdDeck } = await axios.request(reqOptions);

    set((state) => ({ decks: [...state.decks, createdDeck] }));
      callback(null, true);
    } catch (error) {
      callback((error as Error).message, false);
    }
  },
  deleteDeck: async (deckId: string, callback) => {
    const reqOptions = {
      url: `http://127.0.0.1:3000/decks/${deckId}`,
      method: "DELETE"
    };
    try {
      await axios.request(reqOptions);

      callback(null);
      set((state) => ({
        decks: state.decks.filter((deck) => deck.id !== deckId),
        cards: state.cards.filter((card) => card.deckId !== deckId)
      }));
    } catch (error) {
      callback((error as Error).message);
    }
  },
  createCard: async (cardData, callback) => {
    const reqOptions = {
      url: "http://127.0.0.1:3000/cards",
      method: "POST",
      data: cardData,
    };
    try {
      const { data: createdCard } = await axios.request(reqOptions);

      callback(null);
    set((state) => {
      const newDeckArray = [...state.decks];
      const deckIndex = newDeckArray.findIndex((deck) => deck.id === cardData.deckId);
      const newDeck: Deck = {
        ...newDeckArray[deckIndex],
        totalCards: newDeckArray[deckIndex].totalCards as number + 1,
        overdueCards: newDeckArray[deckIndex].overdueCards as number + 1,
        cards: [...newDeckArray[deckIndex].cards as CardType[], createdCard]
      };
      newDeckArray[deckIndex] = newDeck;

      return ({ decks: newDeckArray, cards: [...state.cards, createdCard] });
    });
    } catch (error) {
      callback((error as Error).message);
    }
  },
  }
}));
