import { Request, Response } from 'express';
import { CreateCard } from './CreateCard';

export class CreateCardController {
  private createCard: CreateCard

  constructor(createCard: CreateCard) {
    this.createCard = createCard;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      front, back, deckId, deckName, tag
    } = request.body;

    try {
      if (!deckId) {
        throw new Error('A deck is necessary to create a card');
      }

      const createdCard = await this.createCard.execute({
        back, front, deckId, deckName, tag
      });

      return response.status(201).json(createdCard);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Error!',
      });
    }
  }
}
