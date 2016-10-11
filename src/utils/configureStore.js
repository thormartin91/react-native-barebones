/** @flow */

'use strict';

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';


export default function configureStore() {
  var createAppStore = applyMiddleware(thunk)(createStore);
  const store = createAppStore(rootReducer)
  return store;
}
