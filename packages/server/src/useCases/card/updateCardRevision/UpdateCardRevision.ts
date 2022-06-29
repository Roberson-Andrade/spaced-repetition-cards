import { ICardRepository } from '../../../repositories/ICardRepository';

export class UpdateCardRevision {
    private cardRepository: ICardRepository;

    constructor(cardRepository: ICardRepository) {
      this.cardRepository = cardRepository;
    }

    async execute(cardId: string): Promise<void> {
      return this.cardRepository.updateRevision(cardId);
    }
}
