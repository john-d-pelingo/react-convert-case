import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './core/store';
import App from './views/app';
import TextAreaFormContainer from './views/containers';

// Base styles.
import './views/styles/index.css';

// Main App styles.
import './views/styles/app/App.css';

// Components styles.
import './views/styles/components/ButtonChangeCase.css';
import './views/styles/components/ButtonSubmit.css';
import './views/styles/components/TextAreaForm.css';
import './views/styles/components/TextInfo.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <App>
            <TextAreaFormContainer />
        </App>
    </Provider>,
    document.getElementById('root')
);
