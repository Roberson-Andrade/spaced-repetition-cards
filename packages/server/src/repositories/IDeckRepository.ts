/* eslint-disable no-unused-vars */
import { Deck } from '../domain/entities/deck';

export interface IDeckRepository {
  save(deck: Deck): Promise<Deck | unknown>
  fetch(): Promise<Deck[]>
  delete(deckId: string): Promise<number | unknown>
}
