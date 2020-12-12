import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import path, { dirname } from 'path';
import cors from 'cors';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
import rateLimit from 'express-rate-limit';
import xss from 'xss-clean';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';

dotenv.config({ path: './config.env' });
const __dirname = dirname(fileURLToPath(import.meta.url));

import globalErrorHandler from './utils/globalErrorHandler.js';
import AppErr from './utils/appError.js';

import userRouter from './routes/userRoutes.js';
import reviewRouter from './routes/reviewRoutes.js';
import tourRouter from './routes/tourRoutes.js';

const app = express();
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 100,
  message: 'Too many request from this IP. Please try again in an hour.',
});

// ---------- GLOBAL MIDDLEWARES --------------
app.use(helmet());
app.use('/api', limiter);
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xss());
app.use(cors());
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  })
);
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// ---------- ROUTES --------------
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/tours', tourRouter);
// ---------- ROUTES END ----------

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(`__dirname`, 'client', 'build', 'index.html'));
  });
}

app.all('*', (req, res, next) => {
  next(new AppErr(`Cant find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export default app;
