import { v4 as uuidv4 } from 'uuid';

export class Card {
  public readonly id: string;

  public readonly deckId: string;

  public description: string;

  public answer: string;

  public createdAt?: Date;

  public updatedAt?: Date;

  constructor(props: Omit<Card, 'id'>, id?: string) {
    Object.assign(this, props);
    this.id = id ?? uuidv4();
  }
}
