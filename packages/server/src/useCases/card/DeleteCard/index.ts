import { PostgresCardRepository } from '../../../repositories/implementations/PostgresCardRepository';
import { DeleteCard } from './DeleteCard';
import { DeleteCardController } from './DeleteCardController';

const postgresCardRepository = new PostgresCardRepository();

const deleteCard = new DeleteCard(postgresCardRepository);

export const deleteCardController = new DeleteCardController(deleteCard);
