import './App.css';
import { useEffect, useState } from 'react';
import { ResHealth } from '../shared/types';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './components/Nav';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  flex-grow: 1;
  width: 95%;
`;

function App() {
  return (
    <div className="App">
      <Page>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/sign-out">
              <SignOut />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="*">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Page>
    </div>
  );
}

export default App;

function Home() {
  const [res, setRes] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/health');
      const json: ResHealth = await res.json();
      setRes(json.ok);

      await fetch('/api/foo');

      await fetch('/api/journeys', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          hello: 'world',
        }),
      });
    })();
  }, []);

  return <h2>Home</h2>;
}

function SignIn() {
  return <h2>sign-in</h2>;
}

function SignOut() {
  return <h2>sign-out</h2>;
}

function SignUp() {
  return <h2>sign-up</h2>;
}
