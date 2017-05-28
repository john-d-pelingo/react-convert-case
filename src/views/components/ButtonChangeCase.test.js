import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';

import { CASES } from 'core/constants';

import ButtonChangeCase from './ButtonChangeCase';

const changeCase = require('change-case');

describe('ButtonChangeCase component', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      buttonCase: '',
      buttonName: '',
      buttonText: '',
      disabled: true,

      handleSubmit: fn => fn,
      handleTextAreaFormSubmit: values => values
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
      expect(render(<ButtonChangeCase { ...defaultProps } />).text()).toBe('');
    });
  });

  describe('New props', () => {
    function displayChangeCasesButtons(theButtonCase, theButtonName, theButtonText) {
      describe(`${ theButtonText } button`, () => {
        let newProps;

        beforeEach(() => {
          newProps = {
            ...defaultProps,
            buttonCase: theButtonCase,
            buttonName: theButtonName,
            buttonText: theButtonText
          };
        });

        it('renders without crashing', () => {
          const div = document.createElement('div');
          ReactDOM.render(<ButtonChangeCase { ...newProps } />, div);
        });

        it(`should be selectable by class ".${ theButtonName }"`, () => {
          expect(shallow(<ButtonChangeCase { ...newProps } />).is(`.${ theButtonName }`)).toBe(true);
        });

        it('should mount in a full DOM', () => {
          expect(mount(<ButtonChangeCase { ...newProps } />).find(`.${ theButtonName }`).length).toBe(1);
        });

        it('should render to static HTML', () => {
          expect(render(<ButtonChangeCase { ...newProps } />).text()).toBe(theButtonText);
        });
      });
    }

    const casesKeys = Object.keys(CASES);

    for (let ii = 0; ii < casesKeys.length; ii++) {
      const theButtonName = CASES[casesKeys[ii]].name;
      const theFunctionName = CASES[casesKeys[ii]].functionName;

      displayChangeCasesButtons(
        theButtonName,
        changeCase.paramCase(theButtonName) + '-case',
        changeCase[theFunctionName](`${ changeCase.noCase(theButtonName) } case`)
      );
    }
  });

  describe('Simulations', () => {
    describe('#click', () => {
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
});
