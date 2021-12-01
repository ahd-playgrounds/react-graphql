import { useEffect, useState } from 'react';
import { Journey } from '../../shared/types';
import { useSdk } from '../hooks/Sdk';

export function Home() {
  const sdk = useSdk();
  const [journeys, setJourneys] = useState<null | Journey[]>(null);
  useEffect(() => {
    (async () => {
      const res = await sdk.journeys();
      setJourneys(res.journeys);
      console.log(journeys);
    })();
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <p>available journeys: {journeys ? journeys.join(', ') : 'loading...'}</p>
    </div>
  );
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
