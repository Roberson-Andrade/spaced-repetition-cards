import { PostgresDeckRepository } from '../../repositories/implementations/PostgresDeckRepository';
import { CreateDeck } from './CreateDeck';
import { CreatedeckController } from './CreateDeckController';

const postgresDeckRepository = new PostgresDeckRepository();

const createDeck = new CreateDeck(postgresDeckRepository);

export const createDeckController = new CreatedeckController(createDeck);
