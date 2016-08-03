/**
 * Client entry point
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Components
import Main from './main';
import WorksPage from './containers/WorksPage';
import HomePage from './containers/HomePage';
import NotFoundPage from './containers/NotFoundPage';

// rootReducer
import rootReducer from './reducers';

// Schema
import schema from './schema/index';

// State
const defaultState = {
  schema,
};

// Store
const store = createStore(
  rootReducer,
  defaultState
);

// History
const history = syncHistoryWithStore(
  browserHistory,
  store
);

// Routes
const Routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={HomePage} />
        <Route path="/" component={HomePage} />
        <Route path="/works" component={WorksPage} />
        <Route path="*" component={NotFoundPage} />
      </Route>
    </Router>
  </Provider>
);

// Render
render(
  Routes, document.getElementById('main')
);
