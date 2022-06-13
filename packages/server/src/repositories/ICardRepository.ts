/* eslint-disable no-unused-vars */
import { Card } from '../domain/entities/card';

export interface ICardRepository {
  save(card: Card): Promise<Card | unknown>;
}
