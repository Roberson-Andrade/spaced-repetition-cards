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
  deckName,
  back,
  front,
  numberOfRevisions,
  tag
}: Card) => squel
  .insert()
  .into('card')
  .set('id', id)
  .set('deckId', deckId)
  .set('deckName', deckName)
  .set('back', back)
  .set('front', front)
  .set('tag', tag || null)
  .set('numberOfRevisions', numberOfRevisions || 0)
  .toString();

export const fetchCard = (deckId: string | string[]) => {
  const query = squel
    .select()
    .field('id')
    .field('deckid', 'deckId')
    .field('deckName', 'deckName')
    .field('front')
    .field('back')
    .field('created_at', 'createdAt')
    .field('lastRevision', 'lastRevision')
    .field('tag')
    .field('numberOfRevisions', 'numberOfRevisions')
    .from('card');

  if (Array.isArray(deckId)) {
    query.where('deckId IN ?', deckId);
  } else {
    query.where('deckId = ?', deckId);
  }

  return query.toString();
};

export const getCardById = (cardId: string) => squel
  .select()
  .field('id')
  .field('deckid', 'deckId')
  .field('deckName', 'deckName')
  .field('front')
  .field('back')
  .field('created_at', 'createdAt')
  .field('lastRevision', 'lastRevision')
  .field('tag')
  .field('numberOfRevisions', 'numberOfRevisions')
  .from('card')
  .where('id = ?', cardId)
  .toString();

export const deleteCard = (cardId: string) => squel
  .delete()
  .from('card')
  .where('id = ?', cardId)
  .toString();

export const updateCardRevision = (cardId: string[]) => squel
  .update()
  .table('card')
  .set('numberOfRevisions = numberOfRevisions + 1')
  .set('lastRevision', formatISO9075(new Date()))
  .where('id IN ?', cardId)
  .toString();
