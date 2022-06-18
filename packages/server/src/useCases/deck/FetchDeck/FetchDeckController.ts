import { Request, Response } from 'express';
import { FetchDeck } from './FetchDeck';

export class FetchDeckController {
  private fetchDeck: FetchDeck

  constructor(fetchDeck: FetchDeck) {
    this.fetchDeck = fetchDeck;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const decks = await this.fetchDeck.execute();

      return response.status(200).send(decks);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Error!',
      });
    }
  }
}
