/**
 * React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry } from 'react-native';
import App from './src/native/App';

AppRegistry.registerComponent('boilerplate', () => App);
/*

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import { rootEpic } from './src/middlewares/epic';
import reducers from './src/reducers/index';
import App from './src/app.js';


const logger = createLogger();
const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(reducers, applyMiddleware(
  logger,
  thunk,
  epicMiddleware));


export default class marketinig extends Component {
  render() {
    return (
      <Provider store= {store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('marketinig', () => marketinig);
*/