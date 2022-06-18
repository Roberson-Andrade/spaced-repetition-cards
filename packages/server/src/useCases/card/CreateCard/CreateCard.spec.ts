import { Card } from '../../../domain/entities/card';

describe('Create a card', () => {
  it('should be able to created a card successfully', async () => {
    const card = new Card({
      description: 'How much is 2 + 2?',
      answer: 'It\'s 4!',
      deckId: 'asdasfa-asd151as-d',
    });

    expect(card).toBeTruthy();
  });
});
