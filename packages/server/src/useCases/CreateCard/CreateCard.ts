import { Card } from '../../domain/entities/card';
import { ICardRepository } from '../../repositories/ICardRepository';
import { CreateCardRequestDTO } from './CreateCardDTO';

export class CreateCard {
  private cardRepository: ICardRepository

  constructor(cardRepository: ICardRepository) {
    this.cardRepository = cardRepository;
  }

  async execute({ answer, description, deckId }: CreateCardRequestDTO) {
    if (answer.trim() === '' || description.trim() === '') {
      throw new Error('Description and answer are required fields');
    }

    const card = new Card({ answer, description, deckId });

    await this.cardRepository.save(card);
  }
}
