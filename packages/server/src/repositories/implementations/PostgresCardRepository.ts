import { Pool } from 'pg';
import pool from '../../config/database';
import { Card } from '../../domain/entities/card';
import { ICardRepository } from '../ICardRepository';
import {
  createCard, deleteCard, fetchCard, getCardById, updateCardRevision
} from './db';

export class PostgresCardRepository implements ICardRepository {
  private pool: Pool

  constructor() {
    this.pool = pool;
  }

  async save(card: Card): Promise<Card> {
    const client = await this.pool.connect();

    try {
      await client.query(createCard(card));
      const { rows } = await client.query(getCardById(card.id));

      return rows[0];
    } finally {
      client.release();
    }
  }

  async fetch(deckId: string): Promise<Card[]> {
    const client = await this.pool.connect();

    try {
      const { rows } = await client.query(fetchCard(deckId));
      return rows;
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

  async updateRevision(cardId: string[]): Promise<void> {
    const client = await this.pool.connect();

    try {
      await client.query(updateCardRevision(cardId));
    } finally {
      client.release();
    }
  }
}
