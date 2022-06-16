import { Router } from 'express';
import { createCardController } from './useCases/CreateCard';
import { createDeckController } from './useCases/CreateDeck';
import { fetchDeckController } from './useCases/FetchDeck';

const router = Router();

router.post('/cards', (request, response) => createCardController.handle(request, response));

router.get('/decks', (request, response) => fetchDeckController.handle(request, response));
router.post('/decks', (request, response) => createDeckController.handle(request, response));

export { router };
