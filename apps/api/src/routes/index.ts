import express from 'express';

const api = express.Router();

api.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const redirectRouter = express.Router();

export { api, redirectRouter };