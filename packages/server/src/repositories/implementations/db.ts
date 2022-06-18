import squel from 'squel';
import { Card } from '../../domain/entities/card';
import { Deck } from '../../domain/entities/deck';

const squelPostgres = squel.useFlavour('postgres');

export const createDeck = ({ id, name, category }: Deck) => squelPostgres
  .insert()
  .into('deck')
  .set('id', id)
  .set('name', name)
  .set('category', category || null)
  .returning('*')
  .toString();

export const fetchDeck = () => squelPostgres
  .select()
  .from('deck')
  .toString();

export const deleteDeck = (deckId: string) => squelPostgres
  .delete()
  .from('deck')
  .where('id = ?', deckId)
  .toString();

export const createCard = ({
  id,
  deckId,
  answer,
  description,
}: Card) => squelPostgres
  .insert()
  .into('card')
  .set('id', id)
  .set('deckId', deckId)
  .set('answer', answer)
  .set('description', description)
  .toString();

export const fetchCard = (deckId: string) => squelPostgres
  .select()
  .from('card')
  .where('deckId = ?', deckId)
  .toString();
