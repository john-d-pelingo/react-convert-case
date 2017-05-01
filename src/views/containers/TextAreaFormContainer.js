/* eslint-disable complexity, class-methods-use-this, react/jsx-closing-bracket-location */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { createSelector } from 'reselect';
import copy from 'copy-to-clipboard';

import { TextAreaForm, TextInfo } from '../components';

import { textActions, textSelectors } from '../../core/text';
import { caseSelectors } from '../../core/case';

const propTypes = {
    canRedo: PropTypes.bool.isRequired,
    canUndo: PropTypes.bool.isRequired,
    lastCasePressed: PropTypes.string,
    presentCurrentText: PropTypes.string.isRequired,
    presentCurrentTextCharacterCount: PropTypes.number.isRequired,
    presentCurrentTextWordCount: PropTypes.number.isRequired,
    presentInitialText: PropTypes.string.isRequired,
    presentInitialTextCount: PropTypes.number.isRequired,

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

class TextAreaFormContainer extends React.Component {
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
            setCase(newCase, text);
        }

        if (action) {
            if (action === 'clear') {
                clearHistoryText();
            } else if (action === 'copy-to-clipboard' && trimmedText !== '') {
                copy(text);
                copyText(text);
            } else if (action === 'redo') {
                handleRedo();
            } else if (action === 'reset') {
                resetHistoryText();
            } else if (action === 'undo') {
                handleUndo();
            }
        }
        return true;
    }

    render() {
        const { canRedo, canUndo, lastCasePressed, presentCurrentText, presentCurrentTextCharacterCount, presentCurrentTextWordCount, presentInitialText, presentInitialTextCount } = this.props;
        const initialValues = {
            text: presentCurrentText
        };

        return (
            <div className="text-area-container">
                <TextAreaForm
                    initialValues={ initialValues }
                    canRedo={ canRedo }
                    canUndo={ canUndo }
                    characterCount={ presentCurrentTextCharacterCount }
                    currentText={ presentCurrentText }
                    initialText={ presentInitialText }
                    initialTextCount={ presentInitialTextCount }
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

TextAreaFormContainer.propTypes = propTypes;
TextAreaFormContainer.defaultProps = defaultProps;

const mapStateToProps = createSelector(
    textSelectors.isFutureTextEmpty,
    textSelectors.isPastTextEmpty,
    caseSelectors.getLastCase,
    textSelectors.getPresentCurrentText,
    textSelectors.getPresentCurrentTextCharacterCount,
    textSelectors.getPresentCurrentTextWordCount,
    textSelectors.getPresentIntialText,
    textSelectors.getPresentIntialTextCount,
    (futureTextIsEmpty, pastTextIsEmpty, lastCasePressed, presentCurrentText, presentCurrentTextCharacterCount, presentCurrentTextWordCount, presentInitialText, presentInitialTextCount) => ({
        canRedo: !futureTextIsEmpty,
        canUndo: !pastTextIsEmpty,
        lastCasePressed,
        presentCurrentText,
        presentCurrentTextCharacterCount,
        presentCurrentTextWordCount,
        presentInitialText,
        presentInitialTextCount
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextAreaFormContainer);
