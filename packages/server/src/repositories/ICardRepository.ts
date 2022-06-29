/* eslint-disable no-unused-vars */
import { Card } from '../domain/entities/card';

export interface ICardRepository {
  save(card: Card): Promise<Card | unknown>
  fetch(deckId: string): Promise<Card[]>
  updateRevision(cardId: string): Promise<void>
}
