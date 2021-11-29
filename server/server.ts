import express from 'express';
import { Hello } from '../shared/types';

const app = express();
const port = 4000;

app.get('/api', (_, out) => {
  const payload: Hello = { ok: true };
  out.json(payload);
});

export default async function server(): Promise<number> {
  return new Promise((res) => app.listen(port, () => res(port)));
}
