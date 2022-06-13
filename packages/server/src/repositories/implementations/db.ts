import squel from 'squel';
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
