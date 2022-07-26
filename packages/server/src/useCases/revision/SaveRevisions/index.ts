import { DynamodbRevisionRepository } from '../../../repositories/implementations/DynamodbRevisionRepository';
import { PostgresCardRepository } from '../../../repositories/implementations/PostgresCardRepository';
import { SaveRevisionController } from './SaveRevisionController';
import { SaveRevision } from './SaveRevisions';

const cardRepository = new PostgresCardRepository();
const revisionRepository = new DynamodbRevisionRepository();
const saveRevision = new SaveRevision(revisionRepository, cardRepository);
export const saveRevisionController = new SaveRevisionController(saveRevision);
