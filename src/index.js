import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './core/store';
import App from './views/app';
import TextAreaContainer from './views/containers';

// Base styles.
import './views/styles/index.css';

// Main App styles.
import './views/styles/app/App.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <App>
            <TextAreaContainer />
        </App>
    </Provider>,
    document.getElementById('root')
);
