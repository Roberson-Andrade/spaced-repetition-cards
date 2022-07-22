/* eslint-disable no-unused-vars */
import { Card } from '../domain/entities/card';

export interface ICardRepository {
  save(card: Card): Promise<Card>
  fetch(deckId: string): Promise<Card[]>
  delete(cardId: string): Promise<number>
  updateRevision(cardId: string[]): Promise<void>
}
