/* eslint-disable react/jsx-first-prop-new-line */

import React from 'react';
import PropTypes from 'prop-types';

const changeCase = require('change-case');

const propTypes = {
    disabled: PropTypes.bool.isRequired,
    theCase: PropTypes.string.isRequired,
    theCaseFunction: PropTypes.string.isRequired,

    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

const ButtonChangeCase = ({ disabled, theCase, theCaseFunction, handleSubmit, onSubmit }) => (
    <button
        className={ `button-change-case ${ changeCase.paramCase(theCase) }` }
        disabled={ disabled }
        name={ `${ changeCase.paramCase(theCase) }-case` }
        type="submit"
        onClick={
            handleSubmit(values =>
                onSubmit({
                    ...values,
                    newCase: theCase
                })) }>
        { changeCase[theCaseFunction](`${ changeCase.noCase(theCase) } case`) }
    </button>
);

ButtonChangeCase.propTypes = propTypes;

export default ButtonChangeCase;
