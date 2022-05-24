import { uuidv4 } from 'uuid';
import { Card } from './card';

interface DeckProps {
  cards: Card[];
  createdAt: Date;
  updatedAt: Date;
}

export class Deck {
  private readonly id: string;

  private props: DeckProps;

  private constructor(props?: DeckProps, id?: string) {
    this.id = id;
    this.props = props;
  }

  static create(props: DeckProps, id?: string) {
    const deck = new Deck(props, id ?? uuidv4());

    return deck;
  }
}
