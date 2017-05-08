import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import shortid from 'shortid';

import ButtonSubmit from './ButtonSubmit';
import SVGClear from './SVGClear';
import SVGCopy from './SVGCopy';
import SVGRedo from './SVGRedo';
import SVGReset from './SVGReset';
import SVGUndo from './SVGUndo';

describe('ButtonSubmit component', () => {
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

    describe('ButtonSubmit SVGClear Decorated component', () => {
        let newProps;

        beforeEach(() => {
            newProps = {
                ...defaultProps,
                children: [
                    <SVGClear key={ shortid.generate() } disabled={ false } />
                ],
                disabled: false,
                name: 'clear',
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

        it('should mount in a full DOM along with its children', () => {
            const wrapper = mount(<ButtonSubmit { ...newProps } />);
            expect(wrapper.find('.button-submit').length).toBe(1);
            expect(wrapper.find('.button-submit').children()).toHaveLength(1);
            expect(wrapper.find('.svg-clear').length).toBe(1);
        });

        it('should render to no static HTML', () => {
            expect(render(<ButtonSubmit { ...newProps } />).text()).toBe('');
        });
    });

    describe('ButtonSubmit SVGCopy Decorated component', () => {
        let newProps;

        beforeEach(() => {
            newProps = {
                ...defaultProps,
                children: [
                    <SVGCopy key={ shortid.generate() } disabled={ false } />
                ],
                disabled: false,
                name: 'copy',
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

        it('should mount in a full DOM along with its children', () => {
            const wrapper = mount(<ButtonSubmit { ...newProps } />);
            expect(wrapper.find('.button-submit').length).toBe(1);
            expect(wrapper.find('.button-submit').children()).toHaveLength(1);
            expect(wrapper.find('svg').length).toBe(1);
        });

        it('should render to no static HTML', () => {
            expect(render(<ButtonSubmit { ...newProps } />).text()).toBe('');
        });
    });

    describe('ButtonSubmit SVGRedo Decorated component', () => {
        let newProps;

        beforeEach(() => {
            newProps = {
                ...defaultProps,
                children: [
                    <SVGRedo key={ shortid.generate() } disabled={ false } />
                ],
                disabled: false,
                name: 'redo',
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

        it('should mount in a full DOM along with its children', () => {
            const wrapper = mount(<ButtonSubmit { ...newProps } />);
            expect(wrapper.find('.button-submit').length).toBe(1);
            expect(wrapper.find('.button-submit').children()).toHaveLength(1);
            expect(wrapper.find('svg').length).toBe(1);
        });

        it('should render to no static HTML', () => {
            expect(render(<ButtonSubmit { ...newProps } />).text()).toBe('');
        });
    });

    describe('ButtonSubmit SVGReset Decorated component', () => {
        let newProps;

        beforeEach(() => {
            newProps = {
                ...defaultProps,
                children: [
                    <SVGReset key={ shortid.generate() } disabled={ false } />
                ],
                disabled: false,
                name: 'reset',
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

        it('should mount in a full DOM along with its children', () => {
            const wrapper = mount(<ButtonSubmit { ...newProps } />);
            expect(wrapper.find('.button-submit').length).toBe(1);
            expect(wrapper.find('.button-submit').children()).toHaveLength(1);
            expect(wrapper.find('svg').length).toBe(1);
        });

        it('should render to no static HTML', () => {
            expect(render(<ButtonSubmit { ...newProps } />).text()).toBe('');
        });
    });

    describe('ButtonSubmit SVGUndo Decorated component', () => {
        let newProps;

        beforeEach(() => {
            newProps = {
                ...defaultProps,
                children: [
                    <SVGUndo key={ shortid.generate() } disabled={ false } />
                ],
                disabled: false,
                name: 'undo',
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

        it('should mount in a full DOM along with its children', () => {
            const wrapper = mount(<ButtonSubmit { ...newProps } />);
            expect(wrapper.find('.button-submit').length).toBe(1);
            expect(wrapper.find('.button-submit').children()).toHaveLength(1);
            expect(wrapper.find('svg').length).toBe(1);
        });

        it('should render to no static HTML', () => {
            expect(render(<ButtonSubmit { ...newProps } />).text()).toBe('');
        });
    });
});
