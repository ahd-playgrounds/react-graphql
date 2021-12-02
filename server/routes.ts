import express from 'express';
import { ResHealth, ResJourneys } from '../shared/types';

const router = express.Router();
export default router;

router.get('/health', (_, out) => {
  const payload: ResHealth = { ok: true };
  out.json(payload);
});

router.post('/journeys', (_, out) => {
  const payload: ResJourneys = { journeys: ['sign-in', 'mfa', 'reset-password'] };
  out.json(payload);
});
