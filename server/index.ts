import { readFileSync } from 'fs';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import glob from 'glob';
import { Query } from './Query/query';

let server: ApolloServer;

glob(path.join(__dirname) + '/**/*.graphql', (_, files) => {
  const typeDefs = files.map((f) => readFileSync(f, 'utf8')).join('');

  const resolvers = {
    Query,
  };

  server = new ApolloServer({ typeDefs, resolvers });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
});
