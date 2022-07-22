import { v4 as uuidv4 } from 'uuid';
import { Card } from './card';

export class Deck {
  public readonly id: string;

  public name: string;

  public category?: string;

  public cards?: Card[];

  public totalCards?: number;

  public overdueCards?: number;

  public createdAt?: Date;

  public updatedAt?: Date;

  constructor(props?: Omit<Deck, 'id'>, id?: string) {
    Object.assign(this, props);
    this.id = id ?? uuidv4();
    this.totalCards = props.overdueCards || 0;
    this.overdueCards = props.overdueCards || 0;
    this.cards = props.cards || [];
  }
}
