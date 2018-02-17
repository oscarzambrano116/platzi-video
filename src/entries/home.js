import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Map as map } from 'immutable';
import Home from '../pages/containers/home';
import reducer from '../reducers/index';
import data from '../schemas/index';

const store = createStore(
  reducer,
  map(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const home = document.getElementById('home-container');

render(
  <Provider store={store}>
    <Home />
  </Provider>
  , home);
