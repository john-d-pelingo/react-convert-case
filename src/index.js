import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from 'core/store';
import App from 'views/app';
import { ConvertCaseContainer } from 'views/containers';

// Styles
import 'static/scss/style.css';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={ store }>
    <App>
      <ConvertCaseContainer />
    </App>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
