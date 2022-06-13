import { Router } from 'express';
import { createCardController } from './useCases/CreateCard';
import { createDeckController } from './useCases/CreateDeck';

const router = Router();

router.post('/cards', (request, response) => createCardController.handle(request, response));

router.post('/decks', (request, response) => createDeckController.handle(request, response));

export { router };
