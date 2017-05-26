import React from 'react';
import ReactDOM from 'react-dom';

import TextInfo from './TextInfo';

describe('TextInfo component', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      characterCount: 0,
      wordCount: 0
    };
  });

  describe('Default props', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<TextInfo { ...defaultProps } />, div);
    });

    it('should be selectable by class ".text-info"', () => {
      expect(shallow(<TextInfo { ...defaultProps } />).is('.text-info')).toBe(true);
    });

    it('should mount in a full DOM', () => {
      expect(mount(<TextInfo { ...defaultProps } />).find('.text-info').length).toBe(1);
    });

    it('should render to static HTML', () => {
      const wrapper = render(<TextInfo { ...defaultProps } />);

      expect(wrapper.text()).toContain('Character Count: 0');
      expect(wrapper.text()).toContain('Word Count: 0');
    });
  });

  describe('New props', () => {
    it('should return the same prop values', () => {
      const newProps = {
        ...defaultProps,
        characterCount: 9001,
        wordCount: 42
      };
      const wrapper = shallow(<TextInfo { ...newProps } />);

      expect(wrapper.instance().props.characterCount).toEqual(9001);
      expect(wrapper.instance().props.wordCount).toEqual(42);
    });
  });
});
