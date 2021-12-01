import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { ResHealth } from '../shared/types';

function App() {
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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React test
        </a>
        <pre>server connected: {String(res)}</pre>
      </header>
    </div>
  );
}

export default App;
