import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Application from './components/Application';
import rootReducer from './reducers';

import './index.scss';

const reduxDevToolsExt = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(
  rootReducer,
  typeof reduxDevToolsExt === 'function' && reduxDevToolsExt(),
);

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root'),
);
