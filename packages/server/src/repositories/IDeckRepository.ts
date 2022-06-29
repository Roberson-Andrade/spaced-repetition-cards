/* eslint-disable no-unused-vars */
import { Deck } from '../domain/entities/deck';

export interface IDeckRepository {
  save(deck: Deck): Promise<Deck>
  fetch(): Promise<Deck[]>
  delete(deckId: string): Promise<number>
}
