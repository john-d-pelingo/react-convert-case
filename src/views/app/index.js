import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

const propTypes = {
    children: PropTypes.object.isRequired
};

class App extends Component {
    constructor(props) {
        super(props);

        if (process.env.NODE_ENV !== 'test') {
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

export default App;
