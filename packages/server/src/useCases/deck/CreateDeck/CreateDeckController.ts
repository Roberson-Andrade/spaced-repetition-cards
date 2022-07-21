import { Request, Response } from 'express';
import { CreateDeck } from './CreateDeck';

export class CreatedeckController {
  private createDeck: CreateDeck

  constructor(createDeck: CreateDeck) {
    this.createDeck = createDeck;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, category } = request.body;

    try {
      const createdDeck = await this.createDeck.execute({ name, category });

      return response.status(201).json(createdDeck);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Error!',
      });
    }
  }
}
