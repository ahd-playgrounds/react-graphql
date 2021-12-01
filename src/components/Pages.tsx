import { useEffect, useState } from 'react';
import { ResHealth } from '../../shared/types';

export function Home() {
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

export function SignIn() {
  return <h2>sign-in</h2>;
}

export function SignOut() {
  return <h2>sign-out</h2>;
}

export function SignUp() {
  return <h2>sign-up</h2>;
}
