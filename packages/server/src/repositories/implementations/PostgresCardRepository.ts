import { Pool } from 'pg';
import { Card } from '../../domain/entities/card';
import { ICardRepository } from '../ICardRepository';
import options from '../../config/database';
import { createCard } from './db';

export class PostgresCardRepository implements ICardRepository {
  private pool: Pool

  constructor() {
    this.pool = new Pool(options);
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
