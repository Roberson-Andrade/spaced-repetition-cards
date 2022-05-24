import { v4 as uuidv4 } from 'uuid';

interface CardProps {
  description: string;
  answer: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Card {
  private id: string;

  private props: CardProps;

  private constructor(props?: CardProps, id?: string) {
    this.props = props;
    this.id = id ?? uuidv4();
  }

  static create(props: CardProps, id?: string) {
    const card = new Card(props, id);

    return card;
  }
}
