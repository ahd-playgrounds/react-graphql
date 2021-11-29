import server from './server';

server().then((port) => console.log(`🚀 server running on http://localhost:${port}`)); // eslint-disable-line
