import Review from '../models/reviewModel.js';
import * as factory from '../utils/handlerFactory.js';
import catchAsync from '../utils/catchAsync.js';
// import AppError from '../utils/appError.js';

export const createReview = factory.createOne(Review);
export const getReview = factory.getOne(Review);
export const updateReview = factory.updateOne(Review);
export const deleteReview = factory.deleteOne(Review);

export const getAllReviews = factory.getAll(Review);
