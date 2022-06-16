import { PostgresDeckRepository } from '../../repositories/implementations/PostgresDeckRepository';
import { FetchDeck } from './FetchDeck';
import { FetchDeckController } from './FetchDeckController';

const postgresDeckRepository = new PostgresDeckRepository();

const fetchDeck = new FetchDeck(postgresDeckRepository);

export const fetchDeckController = new FetchDeckController(fetchDeck);
