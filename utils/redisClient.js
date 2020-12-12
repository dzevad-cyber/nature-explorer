import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import redis from 'redis';

const client = redis.createClient({
  url: process.env.REDIS_URL,
  password: process.env.REDIS_PASSWORD,
});

export default client;
