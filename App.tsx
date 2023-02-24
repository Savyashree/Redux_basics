import * as React from 'react';
import './style.css';
import { act } from 'react-dom/test-utils';
import { createStore } from 'redux';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

const reducer = function (state, actions) {
  switch (actions.type) {
    case 'INC':
      state = state + actions.payload;
      break;
    case 'DEC':
      state = state - actions.payload;
      break;
  }
  return state;
};

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log('state changed', store.getState());
});

store.dispatch({ type: 'INC', payload: 2 });
store.dispatch({ type: 'DEC', payload: 2 });
