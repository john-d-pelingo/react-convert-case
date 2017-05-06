import { reduxForm } from 'redux-form';

import { FORMS } from '../../core/constants';

import { TextAreaForm } from '../components';

const TextAreaFormContainer = reduxForm({
    enableReinitialize: true,
    form: FORMS.TEXT_AREA_FORM
})(TextAreaForm);

export default TextAreaFormContainer;
