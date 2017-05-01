import React from 'react';
import ReactDOM from 'react-dom';

// import { CASES } from '../../core/constants';

import { ButtonChangeCase } from './index';

// const changeCase = require('change-case');

describe('ButtonChangeCase Component', () => {
    let defaultProps;

    beforeEach(() => {
        defaultProps = {
            buttonCase: '',
            buttonClassName: '',
            buttonText: '',
            disabled: true,
            buttonName: '',
            handleSubmit() {
            },
            handleTextAreaFormSubmit() {
            }
        };
    });

    describe('Default props', () => {
        it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<ButtonChangeCase { ...defaultProps } />, div);
        });

        it('should be selectable by class ".button-change-case"', () => {
            expect(shallow(<ButtonChangeCase { ...defaultProps } />).is('.button-change-case')).toBe(true);
        });

        it('should mount in a full DOM', () => {
            expect(mount(<ButtonChangeCase { ...defaultProps } />).find('.button-change-case').length).toBe(1);
        });

        it('should render to static HTML', () => {
            expect(render(
                <ButtonChangeCase { ...defaultProps } />).text()
            ).toBe('');
        });
    });

    describe('New props', () => {
        // TODO:
    });

});
