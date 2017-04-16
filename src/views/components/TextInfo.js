import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    characterCount: PropTypes.number.isRequired,
    wordCount: PropTypes.number.isRequired
};

const TextInfo = ({ characterCount, wordCount }) => (
    <div className="text-info">
        <span className="character-count">Character&nbsp;Count:&nbsp;{ characterCount }</span> | <span className="word-count">Word&nbsp;Count:&nbsp;{ wordCount }</span>
    </div>
);


TextInfo.propTypes = propTypes;

export default TextInfo;
