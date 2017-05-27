/* eslint-disable complexity, class-methods-use-this, react/jsx-closing-bracket-location */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { createSelector } from 'reselect';
import copy from 'copy-to-clipboard';

import { textActions, textSelectors } from 'core/text';
import { caseSelectors } from 'core/case';

import { TextInfo } from 'views/components';

import TextAreaFormContainer from './TextAreaForm';

const propTypes = {
  canRedo: PropTypes.bool.isRequired,
  canUndo: PropTypes.bool.isRequired,
  lastCasePressed: PropTypes.string,
  presentCurrentText: PropTypes.string.isRequired,
  presentCurrentTextCharacterCount: PropTypes.number.isRequired,
  presentCurrentTextWordCount: PropTypes.number.isRequired,
  presentInitialText: PropTypes.string.isRequired,
  presentInitialTextCount: PropTypes.number.isRequired,
  presentLastCasedText: PropTypes.string.isRequired,

  clearHistoryText: PropTypes.func.isRequired,
  copyText: PropTypes.func.isRequired,
  handleRedo: PropTypes.func.isRequired,
  handleUndo: PropTypes.func.isRequired,
  resetHistoryText: PropTypes.func.isRequired,
  setCase: PropTypes.func.isRequired,
  updateCurrentText: PropTypes.func.isRequired
};

const defaultProps = {
  lastCasePressed: ''
};

export class ConvertCase extends React.Component {
  constructor(props) {
    super(props);

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleTextAreaFormSubmit = this.handleTextAreaFormSubmit.bind(this);
  }

  handleTextAreaBlur(event) {
    if (event.relatedTarget !== null) {
      const { className } = event.relatedTarget;

      if (className.indexOf('button-change-case') !== -1) {
        event.preventDefault();
      }
    }
  }

  handleTextAreaChange(event, newValue/* , prevValue*/) {
    this.props.updateCurrentText(newValue);
  }

  handleTextAreaFormSubmit(values) {
    const { action, newCase, text } = values;
    const { copyText, clearHistoryText, handleRedo, handleUndo, resetHistoryText, setCase } = this.props;

    const trimmedText = text.trim();

    if (newCase && trimmedText !== '') {
      return setCase(newCase, text);
    }

    if (action) {
      if (action === 'clear') {
        return clearHistoryText();
      } else if (action === 'copy' && trimmedText !== '') {
        copy(text);
        return copyText(text);
      } else if (action === 'redo') {
        return handleRedo();
      } else if (action === 'reset') {
        return resetHistoryText();
      } else if (action === 'undo') {
        return handleUndo();
      }
    }
    return true;
  }

  render() {
    const { canRedo, canUndo, lastCasePressed, presentCurrentText, presentCurrentTextCharacterCount, presentCurrentTextWordCount, presentInitialText, presentInitialTextCount, presentLastCasedText } = this.props;
    const initialValues = {
      text: presentCurrentText
    };

    return (
      <div className="text-area-form-container">
        <TextAreaFormContainer
          initialValues={ initialValues }
          canRedo={ canRedo }
          canUndo={ canUndo }
          characterCount={ presentCurrentTextCharacterCount }
          currentText={ presentCurrentText }
          initialText={ presentInitialText }
          initialTextCount={ presentInitialTextCount }
          lastCasedText={ presentLastCasedText }
          lastCasePressed={ lastCasePressed }
          wordCount={ presentCurrentTextWordCount }
          handleTextAreaBlur={ this.handleTextAreaBlur }
          handleTextAreaChange={ this.handleTextAreaChange }
          handleTextAreaFormSubmit={ this.handleTextAreaFormSubmit } />

        <TextInfo characterCount={ presentCurrentTextCharacterCount } wordCount={ presentCurrentTextWordCount } />
      </div>
    );
  }
}

ConvertCase.propTypes = propTypes;
ConvertCase.defaultProps = defaultProps;

const mapStateToProps = createSelector(
  textSelectors.isFutureTextEmpty,
  textSelectors.isPastTextEmpty,
  caseSelectors.getLastCase,
  textSelectors.getPresentCurrentText,
  textSelectors.getPresentCurrentTextCharacterCount,
  textSelectors.getPresentCurrentTextWordCount,
  textSelectors.getPresentInitialText,
  textSelectors.getPresentInitialTextCount,
  textSelectors.getPresentLastCasedText,
  (futureTextIsEmpty, pastTextIsEmpty, lastCasePressed, presentCurrentText, presentCurrentTextCharacterCount, presentCurrentTextWordCount, presentInitialText, presentInitialTextCount, presentLastCasedText) => ({
    canRedo: !futureTextIsEmpty,
    canUndo: !pastTextIsEmpty,
    lastCasePressed,
    presentCurrentText,
    presentCurrentTextCharacterCount,
    presentCurrentTextWordCount,
    presentInitialText,
    presentInitialTextCount,
    presentLastCasedText
  })
);

const mapDispatchToProps = {
  clearHistoryText: textActions.clearHistoryText,
  copyText: textActions.copyText,
  handleRedo: UndoActionCreators.redo,
  handleUndo: UndoActionCreators.undo,
  resetHistoryText: textActions.resetHistoryText,
  setCase: textActions.setCase,
  updateCurrentText: textActions.updateCurrentText
};

const ConvertCaseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConvertCase);

export default ConvertCaseContainer;
