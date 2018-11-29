import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './rootReducer';
import App from './app';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__Compose || compose;


const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(
    promiseMiddleware()
    )
));
render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
