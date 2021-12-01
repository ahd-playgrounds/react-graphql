import express, { Request, Response, NextFunction } from 'express';
import jsonParser from 'body-parser';
import { ResHealth, ResJourneys } from '../shared/types';
import getScenarioCookie from './getScenarioCookie';

const app = express();
const router = express.Router();
const port = 4000;

app.use(jsonParser.json());

app.use('*', (req, _, next) => {
  console.log({
    method: req.method,
    overrideCookie: getScenarioCookie(req),
    body: req.body,
    url: req.baseUrl,
    time: new Date().toISOString(),
  });

  next();
});

app.use('*', (req, out, next) => {
  const scenario = getScenarioCookie(req);
  if (!scenario) {
    next();
  } else {
    const { path, status, body } = scenario;
    if (req.baseUrl.includes(path)) {
      out.status(status);
      out.json(body ?? '');
    } else {
      next();
    }
  }
});

app.get('/api/health', (_, out) => {
  const payload: ResHealth = { ok: true };
  out.json(payload);
});

app.post('/api/journeys', (_, out) => {
  const payload: ResJourneys = { journeys: ['sign-in', 'mfa'] };
  out.json(payload);
});

app.use('*', (req, out) => {
  out.status(404);
  out.end();
});

// error handler, must be last, we need all the params, even if we don't use them
app.use((err: Error, _: Request, out: Response, __: NextFunction) => {
  console.error(err?.stack);
  out.status(500).send(err?.message);
});

export default async function server(): Promise<number> {
  return new Promise((res) => app.listen(port, () => res(port)));
}
