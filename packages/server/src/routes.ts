import { Router } from 'express';
import { createCardController } from './useCases/card/CreateCard';
import { deleteCardController } from './useCases/card/DeleteCard';
import { fetchCardController } from './useCases/card/FetchCard';
import { updateCardRevisionController } from './useCases/card/updateCardRevision';
import { createDeckController } from './useCases/deck/CreateDeck';
import { deleteDeckController } from './useCases/deck/DeleteDeck';
import { fetchDeckController } from './useCases/deck/FetchDeck';

const router = Router();

router.get('/cards/:deckId', (request, response) => fetchCardController.handle(request, response));
router.post('/cards', (request, response) => createCardController.handle(request, response));
router.delete('/cards/:cardId', (request, response) => deleteCardController.handle(request, response));
router.post('/cards/revise', (request, response) => updateCardRevisionController.handle(request, response));

router.get('/decks', (request, response) => fetchDeckController.handle(request, response));
router.post('/decks', (request, response) => createDeckController.handle(request, response));
router.delete('/decks/:deckId', (request, response) => deleteDeckController.handle(request, response));

export { router };
