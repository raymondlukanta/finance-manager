import merge from 'lodash/object/merge'

import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import payment from './payment'

const rootReducer = combineReducers({
  routing: routeReducer,
  payment
});

export default rootReducer;
