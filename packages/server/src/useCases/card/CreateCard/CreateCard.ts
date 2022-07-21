import { Card } from '../../../domain/entities/card';
import { ICardRepository } from '../../../repositories/ICardRepository';
import { TimerUtils } from '../../../utils/TimerUtils';
import { CreateCardRequestDTO } from './CreateCardDTO';

export class CreateCard {
  private cardRepository: ICardRepository

  constructor(cardRepository: ICardRepository) {
    this.cardRepository = cardRepository;
  }

  async execute({
    back, front, deckId, deckName, tag
  }: CreateCardRequestDTO) {
    if (back.trim() === '' || front.trim() === '') {
      throw new Error('front and back are required fields');
    }

    const card = new Card({
      back, front, deckId, deckName, tag
    });
    const [createdCard] = TimerUtils.updateRevisionStatus([await this.cardRepository.save(card)]);

    return createdCard;
  }
}
