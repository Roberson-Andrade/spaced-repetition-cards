import { Pool } from 'pg';
import pool from '../../config/database';
import { Card } from '../../domain/entities/card';
import { Deck } from '../../domain/entities/deck';
import { IDeckRepository } from '../IDeckRepository';
import {
  createDeck,
  deleteDeck,
  fetchCard,
  fetchDeck
} from './db';

export class PostgresDeckRepository implements IDeckRepository {
  private pool: Pool

  constructor() {
    this.pool = pool;
  }

  async save(deck: Deck): Promise<Deck> {
    const client = await this.pool.connect();

    try {
      const { rows } = await client.query(createDeck(deck));
      const newDeck = new Deck(rows[0], rows[0].id);
      return newDeck;
    } finally {
      client.release();
    }
  }

  async fetch(): Promise<Deck[]> {
    const client = await this.pool.connect();

    try {
      const { rows } = await client.query(fetchDeck());

      if (!rows.length) {
        return [];
      }

      const deckIds = rows.map((deck: Deck) => deck.id);

      const cards = await client.query(fetchCard(deckIds));

      const decks = rows.map((deck: Deck) => ({
        ...deck,
        cards: cards.rows.filter((card: Card) => card.deckId === deck.id),
      }));

      return decks;
    } finally {
      client.release();
    }
  }

  async delete(deckId: string): Promise<number> {
    const client = await this.pool.connect();

    try {
      const response = await client.query(deleteDeck(deckId));
      return response.rowCount;
    } finally {
      client.release();
    }
  }
}
