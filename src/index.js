import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import { getStore } from './redux-configuration';

ReactDOM.render(
  <Provider store={getStore()}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
