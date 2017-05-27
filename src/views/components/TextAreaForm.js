/* eslint-disable react/jsx-closing-bracket-location, complexity */

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import shortid from 'shortid';

import { CASES } from 'core/constants';

import ButtonChangeCase from './ButtonChangeCase';
import ButtonSubmit from './ButtonSubmit';
import SVGClear from './SVGClear';
import SVGCopy from './SVGCopy';
import SVGRedo from './SVGRedo';
import SVGReset from './SVGReset';
import SVGUndo from './SVGUndo';

const changeCase = require('change-case');

const propTypes = {
  canRedo: PropTypes.bool.isRequired,
  canUndo: PropTypes.bool.isRequired,
  characterCount: PropTypes.number.isRequired,
  currentText: PropTypes.string.isRequired,
  initialText: PropTypes.string.isRequired,
  initialTextCount: PropTypes.number.isRequired,
  lastCasedText: PropTypes.string.isRequired,
  lastCasePressed: PropTypes.string,
  submitting: PropTypes.bool.isRequired,
  wordCount: PropTypes.number.isRequired,

  change: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleTextAreaBlur: PropTypes.func.isRequired,
  handleTextAreaChange: PropTypes.func.isRequired,
  handleTextAreaFormSubmit: PropTypes.func.isRequired
};

const defaultProps = {
  lastCasePressed: ''
};

class TextAreaForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.submitSucceeded || this.props.characterCount === 0) {
      this.compTextArea.getRenderedComponent().focus();
    }
  }

  // Enable tab character insertion.
  handleKeyDown(event) {
    if (event.keyCode === 9) {
      // The tab key was pressed.
      event.preventDefault();

      // Get caret position/selection.
      const textAreaVal = this.compTextArea.value;
      const start = this.compTextArea.getRenderedComponent().selectionStart;
      const end = this.compTextArea.getRenderedComponent().selectionEnd;

      // Update current text in redux store.
      this.props.handleTextAreaChange(event, this.compTextArea.value + '\t');

      // Set textarea value to: text-before-caret + tab + text-after-caret.
      this.props.change(this.compTextArea.props.name, textAreaVal.substring(0, start) + '\t' + textAreaVal.substring(end));

      // Put caret at the right position again.
      this.compTextArea.getRenderedComponent().selectionStart = start + 1;
      this.compTextArea.getRenderedComponent().selectionEnd = start + 1;

      // Prevent the focus loss.
      return false;
    }

    return 1;
  }

  render() {
    const { canRedo, canUndo, characterCount, currentText, initialText, initialTextCount, lastCasedText, lastCasePressed, submitting, wordCount, handleSubmit, handleTextAreaBlur, handleTextAreaChange, handleTextAreaFormSubmit } = this.props;

    const renderButtonChangeCases = () => {
      return Object.keys(CASES).map(theCase => {
        const disabled = (currentText === changeCase[CASES[theCase].functionName](currentText)) || ((currentText.trim() === '' || currentText === lastCasedText) && (lastCasePressed === theCase || submitting || wordCount === 0));
        return (
          <ButtonChangeCase
            buttonCase={ theCase }
            buttonName={ `${ changeCase.paramCase(theCase) }-case` }
            buttonText={ changeCase[CASES[theCase].functionName](`${ changeCase.noCase(theCase) } case`) }
            disabled={ disabled }
            key={ shortid.generate() }
            handleSubmit={ handleSubmit }
            handleTextAreaFormSubmit={ handleTextAreaFormSubmit } />
        );
      });
    };

    return (
      <form id="text-area-form" onSubmit={ handleSubmit }>
        <div className="field field-text-area">
          <Field
            autoFocus
            className="text-area"
            component="textarea"
            name="text"
            placeholder="Type or paste your content here"
            ref={ compTextArea => {
              this.compTextArea = compTextArea;
            } }
            type="text"
            withRef
            onBlur={ handleTextAreaBlur }
            onChange={ handleTextAreaChange }
            onKeyDown={ this.handleKeyDown } />
        </div>

        <div className="fields fields-cases">
          { renderButtonChangeCases() }
        </div>

        <div className="fields fields-actions">
          <ButtonSubmit disabled={ characterCount === 0 || submitting } name="clear" handleSubmit={ handleSubmit } handleTextAreaFormSubmit={ handleTextAreaFormSubmit }>
            <SVGClear disabled={ characterCount === 0 || submitting } />
          </ButtonSubmit>
          <ButtonSubmit disabled={ !canUndo || submitting } name="undo" handleSubmit={ handleSubmit } handleTextAreaFormSubmit={ handleTextAreaFormSubmit }>
            <SVGUndo disabled={ !canUndo || submitting } />
          </ButtonSubmit>
          <ButtonSubmit disabled={ characterCount === 0 || submitting } name="copy" handleSubmit={ handleSubmit } handleTextAreaFormSubmit={ handleTextAreaFormSubmit }>
            <SVGCopy disabled={ characterCount === 0 || submitting } />
          </ButtonSubmit>
          <ButtonSubmit disabled={ !canRedo || submitting } name="redo" handleSubmit={ handleSubmit } handleTextAreaFormSubmit={ handleTextAreaFormSubmit }>
            <SVGRedo disabled={ !canRedo || submitting } />
          </ButtonSubmit>
          <ButtonSubmit disabled={ currentText === initialText || initialTextCount === 0 || submitting } name="reset" handleSubmit={ handleSubmit } handleTextAreaFormSubmit={ handleTextAreaFormSubmit }>
            <SVGReset disabled={ currentText === initialText || initialTextCount === 0 || submitting } />
          </ButtonSubmit>
        </div>
      </form>
    );
  }
}

TextAreaForm.propTypes = propTypes;
TextAreaForm.defaultProps = defaultProps;

export default TextAreaForm;
