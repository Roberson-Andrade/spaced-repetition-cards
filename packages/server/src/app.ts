import cors from 'cors';
import express from 'express';
import './config/dynamodb';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

export { app };
