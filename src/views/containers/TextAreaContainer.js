/* eslint-disable react/jsx-closing-bracket-location */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { createSelector } from 'reselect';
import copy from 'copy-to-clipboard';

import { TextArea, TextInfo } from '../components';

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

class TextAreaContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.handleTextAreaFormSubmit = this.handleTextAreaFormSubmit.bind(this);
    }

    handleTextAreaChange(event, newValue/* , prevValue*/) {
        this.props.updateCurrentText(newValue);
    }


    handleTextAreaFormSubmit(values) {
        const { copyToClipboard, newCase, text, redo, undo } = values;
        const { canRedo, canUndo, copyText, handleRedo, handleUndo, setCase } = this.props;

        if (newCase && text.trim() !== '') {
            setCase(newCase, text);
        }

        if (copyToClipboard && text.trim() !== '') {
            copy(text);
            copyText(text);
        }

        if (undo && canUndo) {
            handleUndo();
        }

        if (redo && canRedo) {
            handleRedo();
        }
    }

    render() {
        const { canRedo, canUndo, presentCurrentTextCharacterCount, presentCurrentTextWordCount, presentLastCasedText } = this.props;
        const initialValues = {
            text: presentLastCasedText
        };

        return (
            <div className="Text-Area-Container">
                <TextArea
                    initialValues={ initialValues }
                    canRedo={ canRedo }
                    canUndo={ canUndo }
                    handleTextAreaChange={ this.handleTextAreaChange }
                    onSubmit={ this.handleTextAreaFormSubmit } />

                <TextInfo characterCount={ presentCurrentTextCharacterCount } wordCount={ presentCurrentTextWordCount } />
            </div>
        );
    }
}

TextAreaContainer.propTypes = propTypes;

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
)(TextAreaContainer);
