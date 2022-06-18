import { Request, Response } from 'express';
import { DeleteCard } from './DeleteCard';

export class DeleteCardController {
  private deleteCard: DeleteCard

  constructor(deleteCard: DeleteCard) {
    this.deleteCard = deleteCard;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { cardId } = request.params;

    try {
      const rowsAffected = await this.deleteCard.execute(cardId);

      if (!rowsAffected) {
        throw new Error('Card not found!');
      }

      return response.status(200).json({ rowsAffected });
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Error!',
      });
    }
  }
}
