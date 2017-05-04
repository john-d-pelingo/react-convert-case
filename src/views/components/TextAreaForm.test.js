import React from 'react';
import ReactDOM from 'react-dom';

import { TextAreaForm } from './index';

describe('TextAreaForm Component', () => {
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
            // TODO: Displays 'Field must be inside a component decorated with reduxForm()'
            const div = document.createElement('div');
            ReactDOM.render(<TextAreaForm { ...defaultProps } />, div);
        });

        it(`should be selectable by id "#text-area-form"`, () => {
            expect(shallow(<TextAreaForm { ...defaultProps } />).is('#text-area-form')).toBe(true);
        });

        it.skip('should mount in a full DOM', () => {
            // TODO: Displays 'Field must be inside a component decorated with reduxForm()'
            expect(mount(<TextAreaForm { ...defaultProps } />).find('#text-area-form').length).toBe(1);
        });

        it.skip('should render to static HTML', () => {
            // TODO: Displays 'Field must be inside a component decorated with reduxForm()'
            expect(render(<TextAreaForm { ...defaultProps } />).text()).toBe('');
        });
    });
});
