import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

export default (initialState = {}) => {
    let middleware = applyMiddleware(thunk);

    if (process.env.NODE_ENV === 'development') {
        // Configure redux-devtools-extension
        // @see https://github.com/zalmoxisus/redux-devtools-extension
        const devToolsExtension = window.devToolsExtension;
        if (typeof devToolsExtension === 'function') {
            // Compose all of our middleware one after another
            middleware = compose(middleware, devToolsExtension());
        }
    }

    return createStore(reducers, initialState, middleware);
};
