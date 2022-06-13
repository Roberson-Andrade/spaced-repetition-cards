/* eslint-disable no-unused-vars */
import { Deck } from '../domain/entities/deck';

export interface IDeckRepository {
  save(deck: Deck): Promise<Deck | unknown>
}
