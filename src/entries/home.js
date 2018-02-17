import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { Map as map } from 'immutable';
import Home from '../pages/containers/home';
import reducer from '../reducers/index';
import data from '../schemas/index';


const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(logger),
  ),
);

const home = document.getElementById('home-container');

render(
  <Provider store={store}>
    <Home />
  </Provider>
  , home);
