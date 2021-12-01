import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, SignIn, SignOut, SignUp } from './Pages';

const Routes: FC = () => (
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

export default Routes;
