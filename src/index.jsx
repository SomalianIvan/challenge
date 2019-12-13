import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import App from './ducks/App';
import searchReducer from './ducks/Search/reducer';
import 'regenerator-runtime/runtime';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import searchSaga from './ducks/Search/sagas';
import { searchKey } from './ducks/Search/selectors';

/* store js file */
const rootReducer = combineReducers({ [searchKey]: searchReducer });
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
));
/* store js file */
/* handle NODE_ENV */

sagaMiddleware.run(searchSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
