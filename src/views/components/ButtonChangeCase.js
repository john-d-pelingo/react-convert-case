/* eslint-disable react/jsx-first-prop-new-line */

import React from 'react';
import PropTypes from 'prop-types';

const changeCase = require('change-case');

const propTypes = {
    submitting: PropTypes.bool.isRequired,
    theCase: PropTypes.string.isRequired,

    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

const ButtonChangeCase = ({ submitting, theCase, handleSubmit, onSubmit }) => (
    <div>
        <button onClick={
            handleSubmit(values =>
                onSubmit({
                    ...values,
                    newCase: theCase
                })) } name={ `${ changeCase.lowerCase(theCase) }-case` } type="submit" disabled={ submitting }>
            { changeCase.titleCase(theCase) } Case
        </button>
    </div>
);

ButtonChangeCase.propTypes = propTypes;

export default ButtonChangeCase;
