import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';

export default (initialState = {}) => {
  let middlewares = applyMiddleware(thunk);

  if (process.env.NODE_ENV === 'development') {
    middlewares = applyMiddleware(thunk, logger);

    // Configure redux-devtools-extension.
    // @see https://github.com/zalmoxisus/redux-devtools-extension
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      // Compose all of our middlewares one after another.
      middlewares = compose(middlewares, devToolsExtension());
    }
  }

  return createStore(reducers, initialState, middlewares);
};
