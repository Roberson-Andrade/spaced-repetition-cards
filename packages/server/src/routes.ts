import { Router } from 'express';
import { createCardController } from './useCases/card/CreateCard';
import { deleteCardController } from './useCases/card/DeleteCard';
import { fetchCardController } from './useCases/card/FetchCard';
import { createDeckController } from './useCases/deck/CreateDeck';
import { deleteDeckController } from './useCases/deck/DeleteDeck';
import { fetchDeckController } from './useCases/deck/FetchDeck';
import { fetchRevisionsController } from './useCases/revision/FetchRevisions';
import { saveRevisionController } from './useCases/revision/SaveRevisions';

const router = Router();

router.get('/cards/:deckId', (request, response) => fetchCardController.handle(request, response));
router.post('/cards', (request, response) => createCardController.handle(request, response));
router.delete('/cards/:cardId', (request, response) => deleteCardController.handle(request, response));

router.get('/decks', (request, response) => fetchDeckController.handle(request, response));
router.post('/decks', (request, response) => createDeckController.handle(request, response));
router.delete('/decks/:deckId', (request, response) => deleteDeckController.handle(request, response));

router.post('/revision', (request, response) => saveRevisionController.handle(request, response));
router.get('/revision', (request, response) => fetchRevisionsController.handle(request, response));

export { router };
