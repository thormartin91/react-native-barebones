/** @flow */

'use strict';

//var { combineReducers } = require('redux');
import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = combineReducers({
  counter
});

export default rootReducer;
