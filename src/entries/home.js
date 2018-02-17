import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Map as map } from 'immutable';
import Home from '../pages/containers/home';
import reducer from '../reducers/index';
import data from '../schemas/index';

// JS
// function logger({getState, dispatch}) {
//   return (next) => {
//     return (action) => {
//       console.log('Estado anterior...', getState().toJS());
//       console.log('Accion enviada', action);
//       const value = next(action);
//       console.log('Nuevo estado...', getState().toJS());
//       return value;
//     }
//   }
// }

// ES6
const logger = ({ getState, dispatch }) => next => action => {
  console.log('Estado anterior...', getState().toJS());
  console.log('Accion enviada', action);
  const value = next(action);
  console.log('Nuevo estado...', getState().toJS());
  return value;
}

const store = createStore(
  reducer,
  map(),
  applyMiddleware(logger),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const home = document.getElementById('home-container');

render(
  <Provider store={store}>
    <Home />
  </Provider>
  , home);
