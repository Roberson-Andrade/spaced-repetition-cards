import axios from "axios";
import { format, parseISO } from "date-fns";
import create from "zustand";
import {
  CardData, CardType, Deck, RevisionRequest, RevisionResponse, RevisionStats
} from "../types";
import { updateRevisionStats, updateRevisionStore } from "./utils";

type deckState = {
  decks: Deck[];
  cards: CardType[];
  revisionStats: RevisionStats[];
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
  updateRevision: (
    cardIds: string[],
    deckId: string,
    callback: (error: string | null) => void
  ) => void;
  fetchRevisions: (callback: (error: string | null) => void) => void;
}

export const useStore = create<deckState>()((set) => ({
  decks: [],
  cards: [],
  revisionStats: [],
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

      console.log(createdDeck);
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
  updateRevision: async (cardIds, deckId, callback) => {
    const revisionDate = format(new Date(), "yyyy-MM-dd");
    const revision: RevisionRequest = {
      numberOfRevision: cardIds.length,
      revisionDate
    };

    const reqOptions = {
      url: "http://127.0.0.1:3000/revision",
      method: "POST",
      data: {
        cardIds,
        revision
      },
    };

    try {
      await axios.request(reqOptions);
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
  },
  fetchRevisions: async (callback) => {
    const reqOptions = {
      url: "http://127.0.0.1:3000/revision",
      method: "GET"
    };

    try {
      const { data }: { data: RevisionResponse[] } = await axios.request(reqOptions);
      console.log(data);

      const revisionStats: RevisionStats[] = data.map(
        (revision): RevisionStats => ({
          date: parseISO(revision.date),
          numberOfRevisedCards: parseInt(revision.numberOfRevision, 10)
        })
      );

      callback(null);
      set({ revisionStats });
    } catch (error) {
      callback((error as Error).message);
    }
  }
}));
