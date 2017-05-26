/* eslint-disable react/jsx-first-prop-new-line */

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  buttonCase: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,

  handleSubmit: PropTypes.func.isRequired,
  handleTextAreaFormSubmit: PropTypes.func.isRequired
};

const ButtonChangeCase = ({ disabled, buttonCase, buttonText, buttonName, handleSubmit, handleTextAreaFormSubmit }) => (
  <button
    className={ `button-change-case ${ buttonName }` }
    disabled={ disabled }
    name={ buttonName }
    type="submit"
    onClick={
      handleSubmit(values =>
        handleTextAreaFormSubmit({
          ...values,
          newCase: buttonCase
        })
      )
    }>
    { buttonText }
  </button>
);

ButtonChangeCase.propTypes = propTypes;

export default ButtonChangeCase;
