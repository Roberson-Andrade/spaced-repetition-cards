import { CreateCard } from './createCard';

describe('Create a card', () => {
  it('should be able to created a card successfully', async () => {
    const response = await CreateCard.execute({
      description: 'How much is 2 + 2?',
      answer: 'It\'s 4!',
    });

    expect(response).toBeTruthy();
  });
});
