/* eslint-disable no-unused-vars */

import { Revision } from '../domain/entities/revision';

export interface IRevisionRepository {
  save(revision: Revision): Promise<void>;
  fetch(): Promise<Revision[]>;
}
