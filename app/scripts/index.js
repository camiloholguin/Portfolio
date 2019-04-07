/**
 * Client entry point
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory }  from 'history';

// Components
import WorksPage from './containers/WorksPage';
import HomePage from './containers/HomePage';
import NotFoundPage from './containers/NotFoundPage';

// createRootReducer
import createRootReducer from './reducers';

// Schema
import schema from './schema/index';

// Styles
import '../styles/main.scss';

// State
const defaultState = {
  schema,
};

// History
const history = createBrowserHistory();

// Store
const store = createStore(
  createRootReducer(history),
  defaultState,
);

// Routes
const Routes = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/works" component={WorksPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

// Render
render(
  Routes, document.getElementById('main')
);
