import { Pool } from 'pg';
import { Card } from '../../domain/entities/card';
import { ICardRepository } from '../ICardRepository';
import pool from '../../config/database';
import { createCard, fetchCard } from './db';

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
}
