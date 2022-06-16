import { Deck } from '../../domain/entities/deck';
import { IDeckRepository } from '../../repositories/IDeckRepository';

export class FetchDeck {
  private deckRepository: IDeckRepository

  constructor(deckRepository: IDeckRepository) {
    this.deckRepository = deckRepository;
  }

  async execute(): Promise<Deck[]> {
    return this.deckRepository.fetch();
  }
}
