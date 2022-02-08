import express from 'express';
import * as config from './config';

const app = express();

app.listen(config.PORT);

app.get('/api/orders', (req, res) => {
  return res.json(config.ORDERS);
});

app.post('/api/page-view', (req, res) => {
  console.log('bonus -- store the page view data');
  return res.send();
});
