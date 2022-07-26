import { Revision } from '../../../domain/entities/revision';
import { ICardRepository } from '../../../repositories/ICardRepository';
import { IRevisionRepository } from '../../../repositories/IRevisionRepository';

export class SaveRevision {
  revisionRepository: IRevisionRepository;

  cardRepository: ICardRepository;

  constructor(
    revisionRepository: IRevisionRepository,
    cardRepository: ICardRepository
  ) {
    this.revisionRepository = revisionRepository;
    this.cardRepository = cardRepository;
  }

  async execute(revision: Revision, cardIds: string[]): Promise<void> {
    await this.revisionRepository.save(revision);
    await this.cardRepository.updateRevision(cardIds);
  }
}
