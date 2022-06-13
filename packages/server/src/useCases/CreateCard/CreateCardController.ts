import { Request, Response } from 'express';
import { CreateCard } from './CreateCard';

export class CreateCardController {
  private createCard: CreateCard

  constructor(createCard: CreateCard) {
    this.createCard = createCard;
  }

  async handle(request: Request, response: Response):Promise<Response> {
    const { description, answer } = request.body;

    try {
      await this.createCard.execute({ answer, description });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Error!',
      });
    }
  }
}
