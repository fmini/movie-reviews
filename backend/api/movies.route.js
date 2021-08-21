import express from 'express';
import MoviesController from './movies.controller.js';
import ReviewsController from './reviews.controller';

// Get access to express router
const router = express.Router();

router.route('/').get(MoviesController.apiGetMovies);

router
  .route('/review')
  .post(ReviewsController.apiPostReview)
  .put(ReviewsController.apiUpdateReview)
  .delete(ReviewsController.apiDeleteReview);

export default router;
