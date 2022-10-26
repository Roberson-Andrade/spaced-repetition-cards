import create from "zustand";
import {
  fetchDecks, createDeck, deleteDeck, createCard, fetchRevisions, updateRevision
} from "../api/requests";
import { deckState } from "./types";

export const useStore = create<deckState>()((set) => ({
  decks: [],
  cards: [],
  revisionStats: [],
  fetchDecks: async (callback) => fetchDecks(callback, set),
  createDeck: async (deckData, callback) => createDeck(deckData, callback, set),
  deleteDeck: async (deckId: string, callback) => deleteDeck(deckId, callback, set),
  createCard: async (cardData, callback) => createCard(cardData, callback, set),
  fetchRevisions: async (callback) => fetchRevisions(callback, set),
  updateRevision: async (cardIds, deckId, callback) => updateRevision(
    cardIds,
    deckId,
    callback,
    set
  ),
}));
