export interface CreateCardRequestDTO {
  front: string;
  back: string;
  deckId: string;
  deckName: string;
  tag?: string;
}
