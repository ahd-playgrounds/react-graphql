import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, SignIn, SignOut, SignUp } from './Pages';
import { useJourneys } from '../hooks/queries';

const Routes: FC = () => {
  const { isLoading, error, data: journeys } = useJourneys('');

  if (error) {
    return null;
  }

  if (isLoading) return <p>loading...</p>;

  return (
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
  );
};

export default Routes;
