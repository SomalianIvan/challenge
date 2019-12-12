import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import App from './ducks/App';
import searchReducer from './ducks/Search/reducer';
import "regenerator-runtime/runtime";
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({ search: searchReducer });
const store = createStore(rootReducer, composeWithDevTools(
  // applyMiddleware(...middleware),
  // other store enhancers if any
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
