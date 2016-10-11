/** @flow */

'use strict'

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './utils/configureStore';
import Routes from './router';

const store = configureStore();


export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
  
}
