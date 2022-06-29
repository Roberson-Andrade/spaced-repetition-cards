import { Pool } from 'pg';
import pool from '../../config/database';
import { Deck } from '../../domain/entities/deck';
import {
  createDeck, deleteDeck, fetchCard, fetchDeck,
} from './db';
import { IDeckRepository } from '../IDeckRepository';

export class PostgresDeckRepository implements IDeckRepository {
  private pool: Pool

  constructor() {
    this.pool = pool;
  }

  async save(deck: Deck): Promise<Deck> {
    const client = await this.pool.connect();

    try {
      const response = await client.query(createDeck(deck));
      return response.rows[0];
    } finally {
      client.release();
    }
  }

  async fetch(): Promise<Deck[]> {
    const client = await this.pool.connect();

    try {
      const { rows } = await client.query(fetchDeck());

      const cards = await Promise.all(
        rows.map((deck: Deck) => client.query(fetchCard(deck.id))),
      );

      const decks = rows.map((deck, i) => ({
        ...deck,
        cards: cards[i].rows,
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
