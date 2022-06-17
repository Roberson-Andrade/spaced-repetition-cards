import { PostgresDeckRepository } from '../../repositories/implementations/PostgresDeckRepository';
import { DeleteDeck } from './DeleteDeck';
import { DeleteDeckController } from './DeleteDeckController';

const postgresDeckRepository = new PostgresDeckRepository();

const deleteDeck = new DeleteDeck(postgresDeckRepository);

export const deleteDeckController = new DeleteDeckController(deleteDeck);
