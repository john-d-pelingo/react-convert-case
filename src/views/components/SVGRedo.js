import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  disabled: PropTypes.bool.isRequired
};

const SVGRedo = ({ disabled }) => (
  <svg className="svg-redo" width="24" height="24" viewBox="0 0 24 24">
    <path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z" fillOpacity={ disabled ? 0.1 : 1 } />
  </svg>
);

SVGRedo.propTypes = propTypes;

export default SVGRedo;
