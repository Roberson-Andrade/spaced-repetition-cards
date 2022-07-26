import { Request, Response } from 'express';
import { Revision } from '../../../domain/entities/revision';
import { SaveRevision } from './SaveRevisions';

export class SaveRevisionController {
  private saveRevision: SaveRevision

  constructor(saveRevision: SaveRevision) {
    this.saveRevision = saveRevision;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { cardIds, revision } = request.body;

    try {
      await this.saveRevision.execute(revision as Revision, cardIds as string[]);

      return response.status(200).json();
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Error!',
      });
    }
  }
}
