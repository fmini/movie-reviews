import express from 'express';
import cors from 'cors';
import movies from './api/movies.route.js';

// Create the server
const app = express();

// Attach cors and express.json middleware
app.use(cors());
app.use(express.json());

// Specify the initial routes
app.use('/api/v1/movies', movies);
app.use('*', (req, res) => {
  res.status(404).json({ error: 'not found' });
});

export default app;
