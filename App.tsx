import * as React from 'react';
import './style.css';
import { act } from 'react-dom/test-utils';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import axios from 'axios';

const logger = createLogger();
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

const initialState = {
  userData: {},
  fetching: false,
  fetched: false,
  error: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CALL_API':
      state = { ...state, fetching: true };
      break;
    case 'RECEIVED_API':
      state = {
        ...state,
        fetching: false,
        fetched: true,
        userData: action.payload,
      };
      break;
    case 'ERROR':
      state = { ...state, error: action.payload };
  }
  return state;
};

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, 0, middleware);

store.subscribe(() => {
  console.log('state updated :', store.getState());
});

store.dispatch((dispatch) => {
  dispatch({ type: 'CALL_API' });
  fetch('https://dummyjson.com/products/1')
    .then((res) => {
      return res.json();
    })
    .then((val) => {
      dispatch({ type: 'RECEIVED_API', payload: val });
    })
    .catch((e) => {
      dispatch({ type: 'ERROR', payload: e });
    });
});
