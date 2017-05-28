import React from 'react';
import ReactDOM from 'react-dom';
import { reduxForm } from 'redux-form';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import TextAreaForm from './TextAreaForm';

const spy = jest.fn();
const store = createStore(() => ({}));
const Decorated = reduxForm({ form: 'test-form' })(TextAreaForm);

describe('TextAreaForm component', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      canRedo: false,
      canUndo: false,
      characterCount: 0,
      currentText: '',
      lastCasedText: '',
      initialText: '',
      initialTextCount: 0,
      submitting: false,
      wordCount: 0,

      change() {
      },
      handleSubmit: fn => fn,
      handleTextAreaBlur: e => e,
      handleTextAreaChange: e => e,
      handleTextAreaFormSubmit: values => values
    };
  });

  describe('Default props', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <Provider store={ store }>
          <Decorated
            { ...defaultProps }
            handleSubmit={ spy }
            submitting={ false }
            submit={ spy }
          />
        </Provider>,
        div);
    });

    it(`should be selectable by id "#text-area-form"`, () => {
      expect(shallow(<TextAreaForm { ...defaultProps } />).is('#text-area-form')).toBe(true);
    });

    it('should mount in a full DOM', () => {
      const wrapper = mount(
        <Provider store={ store }>
          <Decorated
            { ...defaultProps }
            handleSubmit={ spy }
            submitting={ false }
            submit={ spy }
          />
        </Provider>
      );

      expect(wrapper.find('#text-area-form').length).toBe(1);
    });

    it('should render to static HTML', () => {
      const wrapper = mount(
        <Provider store={ store }>
          <Decorated
            { ...defaultProps }
            handleSubmit={ spy }
            submitting={ false }
            submit={ spy }
          />
        </Provider>
      );

      expect(wrapper.text()).toBe('camelCaseCONSTANT_CASEdot.caseHeader-Caselower caselower first caseno caseparam-casePascalCasepath/caseSentence casesnake_caseSWAP CASETitle CaseUPPER CASEUpper first case');
    });

    it('should render the snapshot', () => {
      const tree = renderer.create(
        <Provider store={ store }>
          <Decorated
            { ...defaultProps }
            handleSubmit={ spy }
            submitting={ false }
            submit={ spy }
          />
        </Provider>
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
