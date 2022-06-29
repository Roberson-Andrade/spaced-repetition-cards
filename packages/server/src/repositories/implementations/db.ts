import { formatISO9075 } from 'date-fns';
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

export const fetchDeck = () => squel
  .select()
  .from('deck')
  .toString();

export const deleteDeck = (deckId: string) => squel
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
}: Card) => squel
  .insert()
  .into('card')
  .set('id', id)
  .set('deckId', deckId)
  .set('answer', answer)
  .set('description', description)
  .set('numberOfRevisions', numberOfRevisions || 0)
  .toString();

export const fetchCard = (deckId: string) => squel
  .select()
  .field('id')
  .field('description')
  .field('answer')
  .field('created_at', 'createdAt')
  .field('updated_at', 'updatedAt')
  .field('lastRevision', 'lastRevision')
  .field('numberOfRevisions', 'numberOfRevisions')
  .from('card')
  .where('deckId = ?', deckId)
  .toString();

export const deleteCard = (cardId: string) => squel
  .delete()
  .from('card')
  .where('id = ?', cardId)
  .toString();

export const updateCardRevision = (cardId: string) => squel
  .update()
  .table('card')
  .set('numberOfRevisions = numberOfRevisions + 1')
  .set('lastRevision', formatISO9075(new Date()))
  .where('id = ?', cardId)
  .toString();
