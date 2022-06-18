import { Card } from '../../../domain/entities/card';
import { ICardRepository } from '../../../repositories/ICardRepository';

export class FetchCard {
  private cardRepository: ICardRepository

  constructor(cardRepository: ICardRepository) {
    this.cardRepository = cardRepository;
  }

  async execute(deckId: string): Promise<Card[]> {
    return this.cardRepository.fetch(deckId);
  }
}
