import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { history } from '../index';
import Home from './Home';
import NotFound from './NotFound';
import { ErrorBoundary } from 'react-error-boundary';
import Profile from './Profile';

const Router: React.FC = () => (
  <ErrorBoundary FallbackComponent={NotFound}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  </ErrorBoundary>
);

export default Router;
