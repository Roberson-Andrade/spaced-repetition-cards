import { Request, Response } from 'express';
import { DeleteDeck } from './DeleteDeck';

export class DeleteDeckController {
  private deleteDeck: DeleteDeck

  constructor(deleteDeck: DeleteDeck) {
    this.deleteDeck = deleteDeck;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { deckId } = request.params;

    try {
      const rowsAffected = await this.deleteDeck.execute(deckId);

      return response.status(200).json({ rowsAffected });
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Error!',
      });
    }
  }
}
