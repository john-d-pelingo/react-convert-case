import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { createSelector } from 'reselect';
import copy from 'copy-to-clipboard';

import { TextArea } from '../components';

import { textActions, textSelectors } from '../../core/text';

const propTypes = {
    canRedo: PropTypes.bool.isRequired,
    canUndo: PropTypes.bool.isRequired,
    presentLastCasedText: PropTypes.string.isRequired,

    copyText: PropTypes.func.isRequired,
    handleRedo: PropTypes.func.isRequired,
    handleUndo: PropTypes.func.isRequired,
    setCase: PropTypes.func.isRequired
};

class TextAreaContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleTextAreaFormSubmit = this.handleTextAreaFormSubmit.bind(this);
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
        const { canRedo, canUndo, presentLastCasedText } = this.props;
        const initialValues = {
            text: presentLastCasedText
        };

        return (
            <div className="Text-Area-Container">
                <TextArea initialValues={ initialValues } canRedo={ canRedo } canUndo={ canUndo } onSubmit={ this.handleTextAreaFormSubmit } />
            </div>
        );
    }
}

TextAreaContainer.propTypes = propTypes;

const mapStateToProps = createSelector(
    textSelectors.isFutureTextEmpty,
    textSelectors.isPastTextEmpty,
    textSelectors.getPresentLastCasedText,
    (futureTextIsEmpty, pastTextIsEmpty, presentLastCasedText) => ({
        canRedo: !futureTextIsEmpty,
        canUndo: !pastTextIsEmpty,
        presentLastCasedText
    })
);

const mapDispatchToProps = {
    copyText: textActions.copyText,
    handleRedo: UndoActionCreators.redo,
    handleUndo: UndoActionCreators.undo,
    setCase: textActions.setCase
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextAreaContainer);
