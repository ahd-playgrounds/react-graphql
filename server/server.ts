import { createServer, Server } from 'http';
import { Hello } from '../shared/types';

let serverInstance: Server;
const port = 4000;

export default async function server(): Promise<number> {
  serverInstance = createServer((req, res) => {
    console.log('req -->', req.url);

    const payload: Hello = { ok: true };

    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.write(JSON.stringify(payload));
    res.end();
  });

  return new Promise((resolve) => {
    serverInstance.listen(port, () => {
      resolve(port);
    });
  });
}
