import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    characterCount: PropTypes.number.isRequired,
    wordCount: PropTypes.number.isRequired
};

const TextInfo = ({ characterCount, wordCount }) => (
    <div className="Text-Info">
        <span className="character-count">Character Count: { characterCount }</span>
        &nbsp;&nbsp;&nbsp;
        <span className="word-count">Word Count: { wordCount }</span>
    </div>
);


TextInfo.propTypes = propTypes;

export default TextInfo;
