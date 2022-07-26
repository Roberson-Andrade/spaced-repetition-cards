import { Revision } from '../../../domain/entities/revision';
import { IRevisionRepository } from '../../../repositories/IRevisionRepository';

export class FetchRevision {
  revisionRepository: IRevisionRepository;

  constructor(
    revisionRepository: IRevisionRepository
  ) {
    this.revisionRepository = revisionRepository;
  }

  async execute(): Promise<Revision[]> {
    return this.revisionRepository.fetch();
  }
}
