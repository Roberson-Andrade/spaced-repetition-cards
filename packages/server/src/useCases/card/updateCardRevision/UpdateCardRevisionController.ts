import { Request, Response } from 'express';
import { UpdateCardRevision } from './UpdateCardRevision';

export class UpdateCardRevisionController {
  private updateCardRevision: UpdateCardRevision;

  constructor(updateCardRevision: UpdateCardRevision) {
    this.updateCardRevision = updateCardRevision;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { cardIds } = request.body;

    try {
      await this.updateCardRevision.execute(cardIds);

      return response.status(200).json();
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Error!',
      });
    }
  }
}
