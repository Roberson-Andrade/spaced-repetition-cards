import create from "zustand";
import { CardData, CardType, Deck } from "../types";

type deckState = {
  decks: Deck[] | [];
  cards: CardType[] | []
  fetchDecks: () => void;
  createDeck: (name: string, category: string) => void;
  deleteDeck: (deckId: string) => void;
  createCard: (cardData: CardData) => void;
}

export const useStore = create<deckState>()((set) => ({
  decks: [],
  cards: [],
  fetchDecks: async () => {
    const response = await fetch("http://127.0.0.1:3000/decks");
    const decks: Deck[] = await response.json();
    const cards = decks.map((deck) => deck.cards).flat();

    set({ decks, cards: cards as CardType[] });
  },
  createDeck: async (name, category) => {
    const bodyContent = JSON.stringify({
      name,
      category
    });

    const response = await fetch("http://127.0.0.1:3000/decks", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: bodyContent,
    });

    const createdDeck = await response.json();

    set((state) => ({ decks: [...state.decks, createdDeck] }));
  },
  deleteDeck: async (deckId: string) => {
    await fetch(`http://127.0.0.1:3000/decks/${deckId}`, {
      method: "DELETE",
    });

    set((state) => ({ decks: state.decks.filter((deck) => deck.id !== deckId) }));
  },
  createCard: async (cardData) => {
    const bodyContent = JSON.stringify(cardData);

    const response = await fetch("http://127.0.0.1:3000/cards", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: bodyContent,
    });

    const createdCard = await response.json();

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
  }
}));
