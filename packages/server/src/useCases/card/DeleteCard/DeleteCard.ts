import { ICardRepository } from '../../../repositories/ICardRepository';

export class DeleteCard {
  private cardRepository: ICardRepository

  constructor(cardRepository: ICardRepository) {
    this.cardRepository = cardRepository;
  }

  async execute(CardId: string): Promise<number | unknown> {
    return this.cardRepository.delete(CardId);
  }
}
