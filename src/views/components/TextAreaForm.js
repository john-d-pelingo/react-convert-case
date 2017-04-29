/* eslint-disable complexity, react/jsx-first-prop-new-line */

import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import shortid from 'shortid';

import { CASES, FORMS } from '../../core/constants';

import {
    ButtonChangeCase,
    ButtonSubmit,
    SVGClear,
    SVGCopyToClipboard,
    SVGRedo,
    SVGReset,
    SVGUndo
} from './index';

const changeCase = require('change-case');

const propTypes = {
    canRedo: PropTypes.bool.isRequired,
    canUndo: PropTypes.bool.isRequired,
    characterCount: PropTypes.number.isRequired,
    currentText: PropTypes.string.isRequired,
    initialText: PropTypes.string.isRequired,
    initialTextCount: PropTypes.number.isRequired,
    lastCasePressed: PropTypes.string,
    submitting: PropTypes.bool.isRequired,
    wordCount: PropTypes.number.isRequired,

    change: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleTextAreaBlur: PropTypes.func.isRequired,
    handleTextAreaChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
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
        const { canRedo, canUndo, characterCount, currentText, initialText, initialTextCount, lastCasePressed, submitting, wordCount, handleSubmit, handleTextAreaBlur, handleTextAreaChange, onSubmit } = this.props;

        const renderButtonChangeCases = () => {
            return Object.keys(CASES).map(theCase => {
                const disabled = currentText === changeCase[CASES[theCase].functionName](currentText) || lastCasePressed === theCase || submitting || wordCount === 0;
                return (
                    <ButtonChangeCase key={ shortid.generate() } disabled={ disabled } theCase={ theCase } theCaseFunction={ CASES[theCase].functionName } handleSubmit={ handleSubmit } onSubmit={ onSubmit } />
                );
            });
        };

        return (
            <form id="text-area-form" onSubmit={ handleSubmit }>
                <div className="field field-text-area">
                    <Field autoFocus className="text-area" component="textarea" name="text" placeholder="Type or paste your content here" ref={ compTextArea => { this.compTextArea = compTextArea; } } type="text" withRef onBlur={ handleTextAreaBlur } onChange={ handleTextAreaChange } onKeyDown={ this.handleKeyDown } />
                </div>

                <div className="fields fields-cases">
                    { renderButtonChangeCases() }
                </div>

                <div className="fields fields-actions">
                    <ButtonSubmit disabled={ characterCount === 0 || submitting } name="clear" handleSubmit={ handleSubmit } onSubmit={ onSubmit }>
                        <SVGClear disabled={ characterCount === 0 || submitting } />
                    </ButtonSubmit>
                    <ButtonSubmit disabled={ !canUndo || submitting } name="undo" handleSubmit={ handleSubmit } onSubmit={ onSubmit }>
                        <SVGUndo disabled={ !canUndo || submitting } />
                    </ButtonSubmit>
                    <ButtonSubmit disabled={ characterCount === 0 || submitting } name="copy-to-clipboard" handleSubmit={ handleSubmit } onSubmit={ onSubmit }>
                        <SVGCopyToClipboard disabled={ characterCount === 0 || submitting } />
                    </ButtonSubmit>
                    <ButtonSubmit disabled={ !canRedo || submitting } name="redo" handleSubmit={ handleSubmit } onSubmit={ onSubmit }>
                        <SVGRedo disabled={ !canRedo || submitting } />
                    </ButtonSubmit>
                    <ButtonSubmit disabled={ currentText === initialText || initialTextCount === 0 || submitting } name="reset" handleSubmit={ handleSubmit } onSubmit={ onSubmit }>
                        <SVGReset disabled={ currentText === initialText || initialTextCount === 0 || submitting } />
                    </ButtonSubmit>
                </div>
            </form>
        );
    }
}

TextAreaForm.propTypes = propTypes;
TextAreaForm.defaultProps = defaultProps;

export default reduxForm({
    enableReinitialize: true,
    form: FORMS.TEXT_AREA_FORM
})(TextAreaForm);
