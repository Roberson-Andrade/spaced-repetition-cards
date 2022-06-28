import { v4 as uuidv4 } from 'uuid';

export class Card {
  public readonly id: string;

  public readonly deckId: string;

  public description: string;

  public answer: string;

  public lastRevision?: Date;

  public numberOfRevisions?: number;

  public revisionStatus?: 'UP_TO_DATE' | 'OVERDUE'

  public createdAt?: Date;

  public updatedAt?: Date;

  constructor(props: Omit<Card, 'id'>, id?: string) {
    Object.assign(this, props);

    this.numberOfRevisions = this.numberOfRevisions ?? 0;
    this.lastRevision = this.lastRevision ?? new Date();
    this.id = id ?? uuidv4();
  }
}
