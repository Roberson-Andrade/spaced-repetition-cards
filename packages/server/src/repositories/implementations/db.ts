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
  numberOfRevisions,
}: Card) => squelPostgres
  .insert()
  .into('card')
  .set('id', id)
  .set('deckId', deckId)
  .set('answer', answer)
  .set('description', description)
  .set('numberOfRevisions', numberOfRevisions || 0)
  .toString();

export const fetchCard = (deckId: string) => squelPostgres
  .select()
  .field('id')
  .field('description')
  .field('answer')
  .field('created_at')
  .field('updated_at')
  .field('lastRevision')
  .from('card')
  .where('deckId = ?', deckId)
  .toString();

export const deleteCard = (cardId: string) => squelPostgres
  .delete()
  .from('card')
  .where('id = ?', cardId)
  .toString();
