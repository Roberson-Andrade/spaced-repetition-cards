import { Card } from '../../domain/entities/card';

type CreateCardRequest = {
  description: string;
  answer: string;
}

export class CreateCard {
  static async execute({ answer, description }: CreateCardRequest) {
    if (answer.trim() === '' || description.trim() === '') {
      throw new Error('Description and answer');
    }

    const card = Card.create({ answer, description });

    return card;
  }
}
