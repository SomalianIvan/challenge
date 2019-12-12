import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import App from './ducks/App';
import searchReducer from './ducks/Search/reducer';


const rootReducer = combineReducers({ search: searchReducer });
const store = createStore(rootReducer, window.STATE_FROM_SERVER);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
