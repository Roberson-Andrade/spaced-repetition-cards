import {
  Deck, CardType, RevisionStats, CardData
} from "../types";

export type Callback = (error: string | null) => void
export type CallbackWithData = (error: string | null, data: boolean) => void

export interface deckState {
  decks: Deck[];
  cards: CardType[];
  revisionStats: RevisionStats[];
  fetchDecks: (callback: Callback) => void;
  createDeck: (
    payload: { name: string, category: string },
    callback: CallbackWithData
  ) => void;
  deleteDeck: (
    deckId: string,
    callback: Callback
  ) => void;
  createCard: (cardData: CardData, callback: Callback) => void;
  updateRevision: (
    cardIds: string[],
    deckId: string,
    callback: Callback
  ) => void;
  fetchRevisions: (callback: Callback) => void;
}

export type ZustandSet = (partial: deckState | Partial<deckState> |
  ((state: deckState) => deckState | Partial<deckState>), replace?: boolean | undefined) => void
