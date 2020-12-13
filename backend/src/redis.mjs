import asyncRedis from 'async-redis';

import { REDIS_CONFIG } from './config/redis'

const redisClient = asyncRedis.createClient({
  port: REDIS_CONFIG.PORT,
  host: REDIS_CONFIG.HOST,
  password: REDIS_CONFIG.PASSWORD,
});

redisClient.on("error", function (error) {
  console.error('redis error: ', error);
});

export { redisClient }
