import express from 'express';
import MoviesController from './movies.controller';

// Get access to express router
const router = express.Router();

router.route('/').get(MoviesController.apiGetMovies);

export default router;
