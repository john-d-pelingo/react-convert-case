/* eslint-disable react/jsx-first-prop-new-line */

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.object.isRequired,
    disabled: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,

    handleSubmit: PropTypes.func.isRequired,
    handleTextAreaFormSubmit: PropTypes.func.isRequired
};

const ButtonSubmit = ({ children, disabled, name, handleSubmit, handleTextAreaFormSubmit }) => (
    <button
        className="button-submit"
        disabled={ disabled }
        name={ name }
        type="submit"
        onClick={
            handleSubmit(values =>
                handleTextAreaFormSubmit({
                    ...values,
                    action: name
                })) }>
        { children }
    </button>
);

ButtonSubmit.propTypes = propTypes;

export default ButtonSubmit;
