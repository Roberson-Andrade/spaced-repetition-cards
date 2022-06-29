import { Request, Response } from 'express';
import { UpdateCardRevision } from './UpdateCardRevision';

export class UpdateCardRevisionController {
    private updateCardRevision: UpdateCardRevision;

    constructor(updateCardRevision: UpdateCardRevision) {
      this.updateCardRevision = updateCardRevision;
    }

    async handle(request: Request, response: Response): Promise<Response> {
      const { cardId } = request.params;
      try {
        await this.updateCardRevision.execute(cardId);

        return response.status(200).send();
      } catch (error) {
        return response.status(400).json({
          message: error.message || 'Error!',
        });
      }
    }
}
