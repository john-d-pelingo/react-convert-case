import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired
};

const defaultProps = {
  children: []
};

class App extends Component {
  constructor(props) {
    super(props);

    /* istanbul ignore next */
    if (process.env.NODE_ENV !== 'test') {
      // eslint-disable-next-line global-require
      const ReactGA = require('react-ga');

      ReactGA.initialize('UA-70753213-6');
      // This just needs to be called once since we have no routes in this case.
      ReactGA.pageview(window.location.pathname);
    }
  }

  render() {
    return (
      <div className="app">
        <main>{ this.props.children }</main>
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
