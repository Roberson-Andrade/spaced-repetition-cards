import { Callback, ZustandSet } from "../../store/types";
import { CardData, CardType, Deck } from "../../types";
import { axiosInstance } from "../axios";

export const createCard = async (cardData: CardData, callback: Callback, set: ZustandSet) => {
  const reqOptions = {
    url: "/cards",
    method: "POST",
    data: cardData,
  };

  try {
    const { data: createdCard } = await axiosInstance.request<CardType>(reqOptions);

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
};
