import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';

import { ButtonChangeCase } from './index';

describe('ButtonChangeCase Component', () => {
    let defaultProps;

    beforeEach(() => {
        defaultProps = {
            buttonCase: '',
            buttonName: '',
            buttonText: '',
            disabled: true,
            handleSubmit: fn => fn,
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

    describe('Simulations', () => {
        it('shouldn\'t submit the form when button is disabled', () => {
            const onFormSubmit = sinon.spy();

            const wrapper = mount(
                <form onSubmit={ onFormSubmit }>
                    <ButtonChangeCase { ...defaultProps } />
                </form>
            );

            wrapper.find('button').get(0).click();

            expect(onFormSubmit).toHaveProperty('callCount', 0);
        });

        it('should submit the form when button is enabled', () => {
            const onFormSubmit = sinon.spy();

            const newProps = {
                ...defaultProps,
                disabled: false
            };

            const wrapper = mount(
                <form onSubmit={ onFormSubmit }>
                    <ButtonChangeCase { ...newProps } />
                </form>
            );

            wrapper.find('button').get(0).click();

            expect(onFormSubmit).toHaveProperty('callCount', 1);
        });
    });
});
