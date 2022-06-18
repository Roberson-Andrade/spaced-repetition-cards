import { Deck } from '../../../domain/entities/deck';
import { IDeckRepository } from '../../../repositories/IDeckRepository';
import { CreateDeckDTO } from './CreateDeckDTO';

export class CreateDeck {
  private deckRepository: IDeckRepository

  constructor(deckRepository: IDeckRepository) {
    this.deckRepository = deckRepository;
  }

  async execute({ name, category }: CreateDeckDTO) {
    if (name.trim() === '') {
      throw new Error('name is a required field');
    }

    const deck = new Deck({ name, category });

    await this.deckRepository.save(deck);
  }
}
