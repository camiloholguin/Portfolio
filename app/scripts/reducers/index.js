/**
 * Reducers
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import active from './active';
import schema from './schema';
import sidebar from './sidebar';

const rootReducer = combineReducers({
  active,
  schema,
  sidebar,
  routing: routerReducer,
});

export default rootReducer;
