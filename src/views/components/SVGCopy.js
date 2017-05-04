import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    disabled: PropTypes.bool.isRequired
};

const SVGCopy = ({ disabled }) => (
    <svg className="svg-copy" width="24" height="24" viewBox="0 0 24 24">
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" fillOpacity={ disabled ? 0.1 : 1 } />
    </svg>
);

SVGCopy.propTypes = propTypes;

export default SVGCopy;