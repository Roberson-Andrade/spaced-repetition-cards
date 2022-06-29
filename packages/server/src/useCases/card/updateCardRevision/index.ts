import { PostgresCardRepository } from '../../../repositories/implementations/PostgresCardRepository';
import { UpdateCardRevision } from './UpdateCardRevision';
import { UpdateCardRevisionController } from './UpdateCardRevisionController';

const postgresCardRepository = new PostgresCardRepository();

const updateCardRevision = new UpdateCardRevision(postgresCardRepository);

export const updateCardRevisionController = new UpdateCardRevisionController(updateCardRevision);
