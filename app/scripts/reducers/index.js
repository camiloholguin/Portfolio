/**
 * Reducers
 */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import active from './active';
import schema from './schema';
import sidebar from './sidebar';

const rootReducer = history => combineReducers({
  active,
  schema,
  sidebar,
  router: connectRouter(history),
});

export default rootReducer;
