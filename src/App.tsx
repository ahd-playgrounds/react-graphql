import './App.css';
import { FC } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, useQuery, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: '/',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ApolloProvider client={client}>
          <Comp />
        </ApolloProvider>
      </header>
    </div>
  );
}

const queryMe = gql`
  query me {
    whoami
  }
`;

const Comp: FC = () => {
  const { loading, error, data } = useQuery(queryMe);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <div>{data.whoami}</div>;
};

export default App;
