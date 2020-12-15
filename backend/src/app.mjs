import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { redisClient } from './redis';
import * as config from './config/index';

const app = express();
app.use(bodyParser.json())
app.use(cors())

app.get('/api/orders', (req, res) => {
  return res.json(config.ORDERS);
});

app.post('/api/page-view', (req, res) => {
  const page = req.query.path
  redisClient.INCR(page)
  return res.send();
});

app.get('/api/page-views', async (req, res) => {
  const page = req.query.path
  const numberOfVisits = await redisClient.get(page)
  return res.send({
    numberOfVisits: numberOfVisits || 0
  });
});


export { app }
