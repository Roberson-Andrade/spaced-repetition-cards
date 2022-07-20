import { Deck } from '../../../domain/entities/deck';
import { IDeckRepository } from '../../../repositories/IDeckRepository';
import { TimerUtils } from '../../../utils/TimerUtils';

export class FetchDeck {
  private deckRepository: IDeckRepository

  constructor(deckRepository: IDeckRepository) {
    this.deckRepository = deckRepository;
  }

  async execute(): Promise<Deck[]> {
    const decks = await this.deckRepository.fetch();

    return decks.map((deck) => {
      const cards = TimerUtils.updateRevisionStatus(deck.cards);

      return {
        ...deck,
        cards,
        totalCards: cards.length,
        overdueCards: cards.filter((card) => card.revisionStatus === 'OVERDUE').length
      };
    });
  }
}
