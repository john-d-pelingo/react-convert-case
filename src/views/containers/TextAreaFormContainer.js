/* eslint-disable complexity, react/jsx-closing-bracket-location */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { createSelector } from 'reselect';
import copy from 'copy-to-clipboard';

import { TextAreaForm, TextInfo } from '../components';

import { textActions, textSelectors } from '../../core/text';

const propTypes = {
    canRedo: PropTypes.bool.isRequired,
    canUndo: PropTypes.bool.isRequired,
    presentCurrentTextCharacterCount: PropTypes.number.isRequired,
    presentCurrentTextWordCount: PropTypes.number.isRequired,
    presentLastCasedText: PropTypes.string.isRequired,

    copyText: PropTypes.func.isRequired,
    handleRedo: PropTypes.func.isRequired,
    handleUndo: PropTypes.func.isRequired,
    setCase: PropTypes.func.isRequired,
    updateCurrentText: PropTypes.func.isRequired
};

class TextAreaFormContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.handleTextAreaFormSubmit = this.handleTextAreaFormSubmit.bind(this);
    }

    handleTextAreaChange(event, newValue/* , prevValue*/) {
        this.props.updateCurrentText(newValue);
    }


    handleTextAreaFormSubmit(values) {
        const { action, newCase, text } = values;
        const { canRedo, canUndo, copyText, handleRedo, handleUndo, setCase } = this.props;

        const trimmedText = text.trim();

        if (newCase && trimmedText !== '') {
            setCase(newCase, text);
        }

        if (action) {
            if (action === 'undo' && canUndo) {
                handleUndo();
            } else if (action === 'redo' && canRedo) {
                handleRedo();
            } else if (action === 'copy-to-clipboard' && trimmedText !== '') {
                copy(text);
                copyText(text);
            }
        }
    }

    render() {
        const { canRedo, canUndo, presentCurrentTextCharacterCount, presentCurrentTextWordCount, presentLastCasedText } = this.props;
        const initialValues = {
            text: presentLastCasedText
        };

        return (
            <div className="text-area-container">
                <TextAreaForm
                    initialValues={ initialValues }
                    canRedo={ canRedo }
                    canUndo={ canUndo }
                    characterCount={ presentCurrentTextCharacterCount }
                    handleTextAreaChange={ this.handleTextAreaChange }
                    onSubmit={ this.handleTextAreaFormSubmit } />

                <TextInfo characterCount={ presentCurrentTextCharacterCount } wordCount={ presentCurrentTextWordCount } />
            </div>
        );
    }
}

TextAreaFormContainer.propTypes = propTypes;

const mapStateToProps = createSelector(
    textSelectors.isFutureTextEmpty,
    textSelectors.isPastTextEmpty,
    textSelectors.getPresentCurrentTextCharacterCount,
    textSelectors.getPresentCurrentTextWordCount,
    textSelectors.getPresentLastCasedText,
    (futureTextIsEmpty, pastTextIsEmpty, presentCurrentTextCharacterCount, presentCurrentTextWordCount, presentLastCasedText) => ({
        canRedo: !futureTextIsEmpty,
        canUndo: !pastTextIsEmpty,
        presentCurrentTextCharacterCount,
        presentCurrentTextWordCount,
        presentLastCasedText
    })
);

const mapDispatchToProps = {
    copyText: textActions.copyText,
    handleRedo: UndoActionCreators.redo,
    handleUndo: UndoActionCreators.undo,
    setCase: textActions.setCase,
    updateCurrentText: textActions.updateCurrentText
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextAreaFormContainer);
