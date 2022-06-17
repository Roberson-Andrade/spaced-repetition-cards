import { Request, Response } from 'express';
import { CreateCard } from './CreateCard';

export class CreateCardController {
  private createCard: CreateCard

  constructor(createCard: CreateCard) {
    this.createCard = createCard;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { description, answer, deckId } = request.body;

    try {
      if (!deckId) {
        throw new Error('A deck is necessary to create a card');
      }

      await this.createCard.execute({ answer, description, deckId });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Error!',
      });
    }
  }
}
