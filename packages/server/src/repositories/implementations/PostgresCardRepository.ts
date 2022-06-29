import { Pool } from 'pg';
import { Card } from '../../domain/entities/card';
import { ICardRepository } from '../ICardRepository';
import pool from '../../config/database';
import { createCard, deleteCard, fetchCard } from './db';

export class PostgresCardRepository implements ICardRepository {
  private pool: Pool

  constructor() {
    this.pool = pool;
  }

  async save(card: Card): Promise<Card | unknown> {
    const client = await this.pool.connect();

    try {
      const response = await client.query(createCard(card));
      return response.rows[0];
    } catch (error) {
      return error;
    } finally {
      client.release();
    }
  }

  async fetch(deckId: string): Promise<Card[]> {
    const client = await this.pool.connect();

    try {
      const { rows } = await client.query(fetchCard(deckId));
      return rows;
    } catch (error) {
      return error;
    } finally {
      client.release();
    }
  }

  async delete(cardId: string): Promise<number> {
    const client = await this.pool.connect();

    try {
      const { rowCount } = await client.query(deleteCard(cardId));
      return rowCount;
    } finally {
      client.release();
    }
  }

  async updateRevision(cardId: string): Promise<void> {
    const client = await this.pool.connect();

    try {
      await client.query(updateCardRevision(cardId));
    } finally {
      client.release();
    }
  }
}
