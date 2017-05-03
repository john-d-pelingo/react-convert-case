import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import shortid from 'shortid';

import {
    ButtonSubmit,
    SVGClear,
    SVGCopyToClipboard,
    SVGRedo,
    SVGReset,
    SVGUndo
} from './index';

describe('ButtonSubmit Component', () => {
    let defaultProps;

    beforeEach(() => {
        defaultProps = {
            children: [],
            disabled: true,
            name: '',
            handleSubmit: fn => fn,
            handleTextAreaFormSubmit: values => values
        };
    });

    describe('Default props', () => {
        it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<ButtonSubmit { ...defaultProps } />, div);
        });

        it('should be selectable by class ".button-submit"', () => {
            expect(shallow(<ButtonSubmit { ...defaultProps } />).is('.button-submit')).toBe(true);
        });

        it('should mount in a full DOM', () => {
            expect(mount(<ButtonSubmit { ...defaultProps } />).find('.button-submit').length).toBe(1);
        });

        it('should render to static HTML', () => {
            expect(render(<ButtonSubmit { ...defaultProps } />).text()).toBe('');
        });
    });

    describe('Simulations', () => {
        it('shouldn\'t submit the form when button is disabled', () => {
            const onFormSubmit = sinon.spy();

            const wrapper = mount(
                <form onSubmit={ onFormSubmit }>
                    <ButtonSubmit { ...defaultProps } />
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
                    <ButtonSubmit { ...newProps } />
                </form>
            );

            wrapper.find('button').get(0).click();

            expect(onFormSubmit).toHaveProperty('callCount', 1);
        });
    });

    describe('ButtonSubmit SVG Decorated Component', () => {
        function displayDecoratedSubmitButtons(decoratorComponentName, decoratorComponentPropName, decoratorComponent) {
            describe(`${ decoratorComponentName } Decorator`, () => {
                let newProps;

                beforeEach(() => {
                    newProps = {
                        ...defaultProps,
                        children: [
                            <decoratorComponent key={ shortid.generate() } />
                        ],
                        disabled: false,
                        name: decoratorComponentPropName,
                        handleSubmit: fn => fn,
                        handleTextAreaFormSubmit: values => values
                    };
                });

                it('renders without crashing', () => {
                    const div = document.createElement('div');
                    ReactDOM.render(<ButtonSubmit { ...newProps } />, div);
                });

                it(`should be selectable by class ".button-submit"`, () => {
                    expect(shallow(<ButtonSubmit { ...newProps } />).is('.button-submit')).toBe(true);
                });

                it('should mount in a full DOM', () => {
                    const wrapper = mount(<ButtonSubmit { ...newProps } />);
                    expect(wrapper.find('.button-submit').length).toBe(1);
                    expect(wrapper.find('.button-submit').children()).toHaveLength(1);

                    // TODO: Cannot find svg in child component.
                    // expect(wrapper.find('decoratorComponent').length).toBe(1);
                });

                it('should render to static HTML', () => {
                    expect(render(<ButtonSubmit { ...newProps } />).text()).toBe('');
                });
            });
        }

        const decoratedButtons = {
            SVGClear: {
                name: 'clear',
                component: SVGClear
            },
            SVGCopyToClipboard: {
                name: 'copy-to-clipboard',
                component: SVGCopyToClipboard
            },
            SVGRedo: {
                name: 'redo',
                component: SVGRedo
            },
            SVGReset: {
                name: 'reset',
                component: SVGReset
            },
            SVGUndo: {
                name: 'undo',
                component: SVGUndo
            }
        };
        const decoratedButtonsKeys = Object.keys(decoratedButtons);

        for (let ii = 0; ii < decoratedButtonsKeys.length; ii++) {
            displayDecoratedSubmitButtons(
                decoratedButtonsKeys[ii],
                decoratedButtons[decoratedButtonsKeys[ii]].name,
                decoratedButtons[decoratedButtonsKeys[ii]].component
            );
        }
    });
});
