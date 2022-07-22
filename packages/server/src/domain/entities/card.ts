import { v4 as uuidv4 } from 'uuid';

export class Card {
  public readonly id: string;

  public readonly deckId: string;

  public readonly deckName: string

  public front: string;

  public back: string;

  public tag?: string;

  public lastRevision?: Date;

  public numberOfRevisions?: number;

  public revisionStatus?: 'UP_TO_DATE' | 'OVERDUE'

  public createdAt?: Date;

  public updatedAt?: Date;

  constructor(props: Omit<Card, 'id'>, id?: string) {
    Object.assign(this, props);

    this.numberOfRevisions = props.numberOfRevisions ?? 0;
    this.lastRevision = props.lastRevision ?? new Date();
    this.id = id ?? uuidv4();
  }
}
