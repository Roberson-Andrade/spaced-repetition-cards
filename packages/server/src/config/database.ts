import { PoolConfig, Pool } from 'pg';

const clientConfig: PoolConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
};

const pool = new Pool(clientConfig);

export default pool;
