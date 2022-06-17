import { Pool } from 'pg';
import options from '../../config/database';
import { Deck } from '../../domain/entities/deck';
import { createDeck, deleteDeck, fetchDeck } from './db';
import { IDeckRepository } from '../IDeckRepository';

export class PostgresDeckRepository implements IDeckRepository {
  private pool: Pool

  constructor() {
    this.pool = new Pool(options);
  }

  async save(deck: Deck): Promise<Deck | unknown> {
    const client = await this.pool.connect();

    try {
      const response = await client.query(createDeck(deck));
      return response.rows[0];
    } catch (err) {
      return err;
    } finally {
      client.release();
    }
  }

  async fetch(): Promise<Deck[]> {
    const client = await this.pool.connect();

    try {
      const response = await client.query(fetchDeck());
      return response.rows;
    } catch (error) {
      return error;
    } finally {
      client.release();
    }
  }

  async delete(deckId: string): Promise<number | unknown> {
    const client = await this.pool.connect();

    try {
      const response = await client.query(deleteDeck(deckId));
      return response.rowCount;
    } catch (error) {
      return error;
    } finally {
      client.release();
    }
  }
}
