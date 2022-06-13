import { PostgresCardRepository } from '../../repositories/implementations/PostgresCardRepository';
import { CreateCard } from './CreateCard';
import { CreateCardController } from './CreateCardController';

const postgresCardRepository = new PostgresCardRepository();
const createCard = new CreateCard(postgresCardRepository);

export const createCardController = new CreateCardController(createCard);
