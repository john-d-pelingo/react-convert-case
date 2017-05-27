import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

describe('App Main Container', () => {
  describe('Default suite', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
    });

    it('should be selectable by class ".app"', () => {
      expect(shallow(<App />).is('.app')).toBe(true);
    });

    it('should mount in a full DOM', () => {
      expect(mount(<App />).find('.app').length).toBe(1);
    });
  });
});
