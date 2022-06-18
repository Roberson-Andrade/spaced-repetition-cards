import { IDeckRepository } from '../../../repositories/IDeckRepository';

export class DeleteDeck {
  private deckRepository: IDeckRepository

  constructor(deckRepository: IDeckRepository) {
    this.deckRepository = deckRepository;
  }

  async execute(deckId: string): Promise<number | unknown> {
    return this.deckRepository.delete(deckId);
  }
}
