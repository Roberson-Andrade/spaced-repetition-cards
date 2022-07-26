import { Request, Response } from 'express';
import { FetchRevision } from './FetchRevisions';

export class FetchRevisionsController {
  private fetchRevision: FetchRevision

  constructor(fetchRevision: FetchRevision) {
    this.fetchRevision = fetchRevision;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const revisions = await this.fetchRevision.execute();

      return response.status(200).json(revisions);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Error!',
      });
    }
  }
}
