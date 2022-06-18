import { PostgresCardRepository } from '../../../repositories/implementations/PostgresCardRepository';
import { FetchCard } from './FetchCard';
import { FetchCardController } from './FetchCardController';

const postgresCardRepository = new PostgresCardRepository();

const fetchCard = new FetchCard(postgresCardRepository);

export const fetchCardController = new FetchCardController(fetchCard);
