import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    disabled: PropTypes.bool.isRequired
};

const SVGClear = ({ disabled }) => (
    <svg width="24" height="24" viewBox="0 0 12 16">
        <path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z" fillOpacity={ disabled ? 0.1 : 1 } />
    </svg>
);

SVGClear.propTypes = propTypes;

export default SVGClear;
