/* eslint-disable complexity, react/jsx-first-prop-new-line */

import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import shortid from 'shortid';

import { CASES, FORMS } from '../../core/constants';

import {
    ButtonChangeCase,
    ButtonSubmit,
    SVGCopyToClipboard,
    SVGRedo,
    SVGUndo
} from './index';

const propTypes = {
    canRedo: PropTypes.bool.isRequired,
    canUndo: PropTypes.bool.isRequired,
    characterCount: PropTypes.number.isRequired,
    submitting: PropTypes.bool.isRequired,

    handleSubmit: PropTypes.func.isRequired,
    handleTextAreaBlur: PropTypes.func.isRequired,
    handleTextAreaChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

const TextAreaForm = ({ canRedo, canUndo, characterCount, submitting, handleSubmit, handleTextAreaBlur, handleTextAreaChange, onSubmit }) => {
    const renderButtonChangeCases = () => {
        return Object.keys(CASES).map(theCase => {
            return (
                <ButtonChangeCase key={ shortid.generate() } disabled={ submitting } theCase={ theCase } theCaseFunction={ CASES[theCase].functionName } handleSubmit={ handleSubmit } onSubmit={ onSubmit } />
            );
        });
    };
    return (
        <form id="text-area-form" onSubmit={ handleSubmit }>
            <div className="field field-text-area">
                <Field autoFocus className="text-area" component="textarea" name="text" placeholder="Type or paste your content here" type="text" onChange={ handleTextAreaChange } onBlur={ handleTextAreaBlur } />
            </div>

            <div className="fields fields-cases">
                { renderButtonChangeCases() }
            </div>

            <div className="fields fields-actions">
                <ButtonSubmit disabled={ !canUndo || submitting } name="undo" handleSubmit={ handleSubmit } onSubmit={ onSubmit }>
                    <SVGUndo disabled={ !canUndo || submitting } />
                </ButtonSubmit>
                <ButtonSubmit disabled={ characterCount === 0 || submitting } name="copy-to-clipboard" handleSubmit={ handleSubmit } onSubmit={ onSubmit }>
                    <SVGCopyToClipboard disabled={ characterCount === 0 || submitting } />
                </ButtonSubmit>
                <ButtonSubmit disabled={ !canRedo || submitting } name="redo" handleSubmit={ handleSubmit } onSubmit={ onSubmit }>
                    <SVGRedo disabled={ !canRedo || submitting } />
                </ButtonSubmit>
            </div>
        </form>
    );
};

TextAreaForm.propTypes = propTypes;

export default reduxForm({
    enableReinitialize: true,
    form: FORMS.TEXT_AREA_FORM
})(TextAreaForm);
