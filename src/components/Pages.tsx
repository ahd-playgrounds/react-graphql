import { useJourneys } from '../hooks/queries';

export function Home() {
  const { isLoading, error, data: journeys } = useJourneys('');

  if (isLoading) return null;
  if (error) {
    return null;
  }

  return (
    <div>
      <h2>Home</h2>
      <p>available journeys: {journeys?.journeys.join(', ')}</p>
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
