import { DynamodbRevisionRepository } from '../../../repositories/implementations/DynamodbRevisionRepository';
import { FetchRevision } from './FetchRevisions';
import { FetchRevisionsController } from './FetchRevisionsController';

const revisionRepository = new DynamodbRevisionRepository();
const fetchRevisions = new FetchRevision(revisionRepository);
export const fetchRevisionsController = new FetchRevisionsController(fetchRevisions);
