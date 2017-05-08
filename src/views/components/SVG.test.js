import React from 'react';
import ReactDOM from 'react-dom';

import SVGClear from './SVGClear';
import SVGCopy from './SVGCopy';
import SVGRedo from './SVGRedo';
import SVGReset from './SVGReset';
import SVGUndo from './SVGUndo';

describe('SVGs', () => {
    let defaultProps;

    beforeEach(() => {
        defaultProps = {
            disabled: true
        };
    });

    describe('SVGClear component', () => {
        describe('Default props', () => {
            it('renders without crashing', () => {
                const div = document.createElement('div');
                ReactDOM.render(<SVGClear { ...defaultProps } />, div);
            });

            it('should render without throwing an error', () => {
                expect(shallow(<SVGClear { ...defaultProps } />).contains(
                    <svg className="svg-clear" width="24" height="24" viewBox="0 0 12 16">
                        <path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z" fillOpacity={ 0.1 } />
                    </svg>
                )).toBe(true);
            });

            it(`should be selectable by class ".svg-clear"`, () => {
                expect(shallow(<SVGClear { ...defaultProps } />).is('.svg-clear')).toBe(true);
            });

            it('should mount in a full DOM', () => {
                expect(mount(<SVGClear { ...defaultProps } />).find('.svg-clear').length).toBe(1);
            });

            it('should render to no static HTML', () => {
                expect(render(<SVGClear { ...defaultProps } />).text()).toBe('');
            });

            it('should have `fillOpacity` equal to 0.1 when it\'s disabled', () => {
                expect(mount(<SVGClear { ...defaultProps } />).find('path').prop('fillOpacity')).toBe(0.1);
            });
        });

        describe('New props', () => {
            it('should have `fillOpacity` equal to 1 when it\'s not disabled', () => {
                const newProps = {
                    ...defaultProps,
                    disabled: false
                };

                expect(mount(<SVGClear { ...newProps } />).find('path').prop('fillOpacity')).toBe(1);
            });
        });
    });

    describe('SVGCopy component', () => {
        describe('Default props', () => {
            it('renders without crashing', () => {
                const div = document.createElement('div');
                ReactDOM.render(<SVGCopy { ...defaultProps } />, div);
            });

            it('should render without throwing an error', () => {
                expect(shallow(<SVGCopy { ...defaultProps } />).contains(
                    <svg className="svg-copy" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" fillOpacity={ 0.1 } />
                    </svg>
                )).toBe(true);
            });

            it(`should be selectable by class ".svg-copy"`, () => {
                expect(shallow(<SVGCopy { ...defaultProps } />).is('.svg-copy')).toBe(true);
            });

            it('should mount in a full DOM', () => {
                expect(mount(<SVGCopy { ...defaultProps } />).find('.svg-copy').length).toBe(1);
            });

            it('should render to no static HTML', () => {
                expect(render(<SVGCopy { ...defaultProps } />).text()).toBe('');
            });

            it('should have `fillOpacity` equal to 0.1 when it\'s disabled', () => {
                expect(mount(<SVGCopy { ...defaultProps } />).find('path').prop('fillOpacity')).toBe(0.1);
            });
        });

        describe('New props', () => {
            it('should have `fillOpacity` equal to 1 when it\'s not disabled', () => {
                const newProps = {
                    ...defaultProps,
                    disabled: false
                };

                expect(mount(<SVGCopy { ...newProps } />).find('path').prop('fillOpacity')).toBe(1);
            });
        });
    });

    describe('SVGRedo component', () => {
        describe('Default props', () => {
            it('renders without crashing', () => {
                const div = document.createElement('div');
                ReactDOM.render(<SVGRedo { ...defaultProps } />, div);
            });

            it('should render without throwing an error', () => {
                expect(shallow(<SVGRedo { ...defaultProps } />).contains(
                    <svg className="svg-redo" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z" fillOpacity={ 0.1 } />
                    </svg>
                )).toBe(true);
            });

            it(`should be selectable by class ".svg-redo"`, () => {
                expect(shallow(<SVGRedo { ...defaultProps } />).is('.svg-redo')).toBe(true);
            });

            it('should mount in a full DOM', () => {
                expect(mount(<SVGRedo { ...defaultProps } />).find('.svg-redo').length).toBe(1);
            });

            it('should render to no static HTML', () => {
                expect(render(<SVGRedo { ...defaultProps } />).text()).toBe('');
            });

            it('should have `fillOpacity` equal to 0.1 when it\'s disabled', () => {
                expect(mount(<SVGRedo { ...defaultProps } />).find('path').prop('fillOpacity')).toBe(0.1);
            });
        });

        describe('New props', () => {
            it('should have `fillOpacity` equal to 1 when it\'s not disabled', () => {
                const newProps = {
                    ...defaultProps,
                    disabled: false
                };

                expect(mount(<SVGRedo { ...newProps } />).find('path').prop('fillOpacity')).toBe(1);
            });
        });
    });

    describe('SVGReset component', () => {
        describe('Default props', () => {
            it('renders without crashing', () => {
                const div = document.createElement('div');
                ReactDOM.render(<SVGReset { ...defaultProps } />, div);
            });

            it('should render without throwing an error', () => {
                expect(shallow(<SVGReset { ...defaultProps } />).contains(
                    <svg className="svg-reset" width="24" height="24" viewBox="0 0 45.579 45.579">
                        <path d="M44.514,23.82c-0.746-0.898-1.843-1.416-3.01-1.416c-2.132,0-3.945,1.457-4.406,3.541 c-1.463,6.574-7.41,11.35-14.142,11.35c-7.998,0-14.506-6.506-14.506-14.505c0-8,6.508-14.506,14.506-14.506 c2.633,0,5.16,0.704,7.399,2.052l-1.221,1.237c-0.361,0.366-0.467,0.916-0.267,1.391c0.202,0.476,0.669,0.781,1.185,0.776 l7.954,0.004c0.933-0.008,1.707-0.845,1.703-1.762l-0.032-7.979c-0.002-0.529-0.314-0.994-0.793-1.189 c-0.479-0.193-1.025-0.081-1.388,0.285l-1.205,1.223C32.423,1.525,27.739,0,22.955,0C10.39,0,0.166,10.224,0.166,22.79 c0,12.565,10.224,22.789,22.79,22.789c10.937,0,20.351-7.796,22.388-18.535C45.562,25.896,45.26,24.722,44.514,23.82z" fillOpacity={ 0.1 } />
                    </svg>
                )).toBe(true);
            });

            it(`should be selectable by class ".svg-reset"`, () => {
                expect(shallow(<SVGReset { ...defaultProps } />).is('.svg-reset')).toBe(true);
            });

            it('should mount in a full DOM', () => {
                expect(mount(<SVGReset { ...defaultProps } />).find('.svg-reset').length).toBe(1);
            });

            it('should render to no static HTML', () => {
                expect(render(<SVGReset { ...defaultProps } />).text()).toBe('');
            });

            it('should have `fillOpacity` equal to 0.1 when it\'s disabled', () => {
                expect(mount(<SVGReset { ...defaultProps } />).find('path').prop('fillOpacity')).toBe(0.1);
            });
        });

        describe('New props', () => {
            it('should have `fillOpacity` equal to 1 when it\'s not disabled', () => {
                const newProps = {
                    ...defaultProps,
                    disabled: false
                };

                expect(mount(<SVGReset { ...newProps } />).find('path').prop('fillOpacity')).toBe(1);
            });
        });
    });

    describe('SVGUndo component', () => {
        describe('Default props', () => {
            it('renders without crashing', () => {
                const div = document.createElement('div');
                ReactDOM.render(<SVGUndo { ...defaultProps } />, div);
            });

            it('should render without throwing an error', () => {
                expect(shallow(<SVGUndo { ...defaultProps } />).contains(
                    <svg className="svg-undo" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" fillOpacity={ 0.1 } />
                    </svg>
                )).toBe(true);
            });

            it(`should be selectable by class ".svg-undo"`, () => {
                expect(shallow(<SVGUndo { ...defaultProps } />).is('.svg-undo')).toBe(true);
            });

            it('should mount in a full DOM', () => {
                expect(mount(<SVGUndo { ...defaultProps } />).find('.svg-undo').length).toBe(1);
            });

            it('should render to no static HTML', () => {
                expect(render(<SVGUndo { ...defaultProps } />).text()).toBe('');
            });

            it('should have `fillOpacity` equal to 0.1 when it\'s disabled', () => {
                expect(mount(<SVGUndo { ...defaultProps } />).find('path').prop('fillOpacity')).toBe(0.1);
            });
        });

        describe('New props', () => {
            it('should have `fillOpacity` equal to 1 when it\'s not disabled', () => {
                const newProps = {
                    ...defaultProps,
                    disabled: false
                };

                expect(mount(<SVGUndo { ...newProps } />).find('path').prop('fillOpacity')).toBe(1);
            });
        });
    });
});
