import { Router } from 'express';
import { createCardController } from './useCases/card/CreateCard';
import { fetchCardController } from './useCases/card/fetchCard';
import { createDeckController } from './useCases/deck/CreateDeck';
import { deleteDeckController } from './useCases/deck/DeleteDeck';
import { fetchDeckController } from './useCases/deck/FetchDeck';

const router = Router();

router.post('/cards', (request, response) => createCardController.handle(request, response));
router.get('/cards/:deckId', (request, response) => fetchCardController.handle(request, response));

router.get('/decks', (request, response) => fetchDeckController.handle(request, response));
router.post('/decks', (request, response) => createDeckController.handle(request, response));
router.delete('/decks/:deckId', (request, response) => deleteDeckController.handle(request, response));

export { router };
