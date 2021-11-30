import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Hello } from '../shared/types';

function App() {
  const [res, setRes] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch('/api');
      const json: Hello = await res.json();
      setRes(json.ok);
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
