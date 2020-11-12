import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { history } from '../index';
import Home from './Home';
import NotFound from './NotFound';
import { ErrorBoundary } from 'react-error-boundary';

const Router: React.FC = () => (
  <ErrorBoundary FallbackComponent={NotFound}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  </ErrorBoundary>
);

export default Router;
