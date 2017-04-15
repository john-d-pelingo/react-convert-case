/* eslint-disable react/jsx-first-prop-new-line */

import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import shortid from 'shortid';

import { CASE } from '../../core/constants';
import { textAreaForm } from '../../core/form';

import ButtonChangeCase from './ButtonChangeCase';

const propTypes = {
    canRedo: PropTypes.bool.isRequired,
    canUndo: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,

    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

const TextArea = ({ canRedo, canUndo, submitting, handleSubmit, onSubmit }) => {
    const renderButtonChangeCases = () => {
        return Object.keys(CASE).map(theCase => {
            return (
                <ButtonChangeCase key={ shortid.generate() } submitting={ submitting } theCase={ theCase } handleSubmit={ handleSubmit } onSubmit={ onSubmit } />
            );
        });
    };

    return (
        <form id="text-area-form" onSubmit={ handleSubmit }>
            <div>
                <Field name="text" component="textarea" type="text" />
            </div>

            <div>
                { renderButtonChangeCases() }
            </div>

            <div>
                <button onClick={
                    handleSubmit(values =>
                        onSubmit({
                            ...values,
                            copyToClipboard: 'copyToClipboard'
                        })) } name="copy" type="submit" disabled={ submitting }>
                    Copy To Clipboard
                </button>
            </div>

            <div>
                <div>
                    <button onClick={
                        handleSubmit(values =>
                            onSubmit({
                                ...values,
                                undo: 'undo'
                            })) } name="undo" type="submit" disabled={ !canUndo || submitting }>
                        Undo
                    </button>
                </div>

                <div>
                    <button onClick={
                        handleSubmit(values =>
                            onSubmit({
                                ...values,
                                redo: 'redo'
                            })) } name="redo" type="submit" disabled={ !canRedo || submitting }>
                        Redo
                    </button>
                </div>
            </div>
        </form>
    );
};

TextArea.propTypes = propTypes;

export default reduxForm({
    enableReinitialize: true,
    form: textAreaForm.TEXT_AREA_FORM
})(TextArea);
