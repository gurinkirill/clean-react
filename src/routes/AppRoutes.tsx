import React from 'react';
import { Redirect, Route, Switch } from 'wouter';
import { Home } from '../pages/Home';
import { Main } from '../pages/Main';

export const AppRoutes: React.FC = () => (
  <Switch>
    <Route path="/">
      <Main />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
    <Route>
      <Redirect to={'/'} />
    </Route>
  </Switch>
);
