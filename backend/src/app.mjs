import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import * as config from './config';

const app = express();
app.use(bodyParser.json())
app.use(cors())

app.listen(config.PORT);

app.get('/api/orders', (req, res) => {
  return res.json(config.ORDERS);
});

app.post('/api/page-view', (req, res) => {
  console.log('bonus -- store the page view data');
  return res.send();
});
