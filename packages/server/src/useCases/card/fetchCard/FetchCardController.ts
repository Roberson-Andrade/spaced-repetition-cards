import { Request, Response } from 'express';
import { FetchCard } from './FetchCard';

export class FetchCardController {
  private fetchCard: FetchCard

  constructor(fetchCard: FetchCard) {
    this.fetchCard = fetchCard;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { deckId } = request.params;
    try {
      const cards = await this.fetchCard.execute(deckId);

      return response.status(200).send(cards);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Error!',
      });
    }
  }
}
