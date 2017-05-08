import React from 'react';
import ReactDOM from 'react-dom';

import TextAreaForm from './TextAreaForm';

describe('TextAreaForm component', () => {
    let defaultProps;

    beforeEach(() => {
        defaultProps = {
            canRedo: false,
            canUndo: false,
            characterCount: 0,
            currentText: '',
            initialText: '',
            initialTextCount: 0,
            submitting: false,
            wordCount: 0,

            change() {},
            handleSubmit: fn => fn,
            handleTextAreaBlur: e => e,
            handleTextAreaChange: e => e,
            handleTextAreaFormSubmit: values => values
        };
    });

    describe('Default props', () => {
        it.skip('renders without crashing', () => {
            // Displays 'Field must be inside a component decorated with reduxForm()'
            // Can only shallow render when testing redux-form.
            const div = document.createElement('div');
            ReactDOM.render(<TextAreaForm { ...defaultProps } />, div);
        });

        it(`should be selectable by id "#text-area-form"`, () => {
            expect(shallow(<TextAreaForm { ...defaultProps } />).is('#text-area-form')).toBe(true);
        });

        it.skip('should mount in a full DOM', () => {
            // Displays 'Field must be inside a component decorated with reduxForm()'
            // Can only shallow render when testing redux-form.
            expect(mount(<TextAreaForm { ...defaultProps } />).find('#text-area-form').length).toBe(1);
        });

        it.skip('should render to static HTML', () => {
            // Displays 'Field must be inside a component decorated with reduxForm()'
            // Can only shallow render when testing redux-form.
            expect(render(<TextAreaForm { ...defaultProps } />).text()).toBe('');
        });
    });
});
