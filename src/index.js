import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './core/store';
import App from './views/app';
import TextAreaFormContainer from './views/containers';

// Styles.
import './views/styles/style.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <App>
            <TextAreaFormContainer />
        </App>
    </Provider>,
    document.getElementById('root')
);
