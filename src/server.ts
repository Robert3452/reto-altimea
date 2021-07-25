import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import './database/mongodb';
import config from './config';

const { PORT } = config;

const app = express();
app.set('port', PORT);

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

export default app;