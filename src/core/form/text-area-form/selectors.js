import getForm from '../selectors';

import TEXT_AREA_FORM from './constants';

export function getTextAreaForm(state) {
    return getForm(state)[TEXT_AREA_FORM];
}

export function getCurrentText(state) {
    return getTextAreaForm(state).values.text;
}

export function getCurrentTextCharacterCount(state) {
    return getCurrentText(state).length;
}

export function getCurrentTextWordCount(state) {
    return countWords(getCurrentText(state));
}

function countWords(s) {
    const s1 = s.replace(/(^\s*)|(\s*$)/gi, ''); // Exclude start and end white-space.
    const s2 = s1.replace(/[ ]{2,}/gi, ' ');// 2 or more space to 1.
    // eslint-disable-next-line quotes
    const s3 = s2.replace(/\n /, "\n"); // Exclude newline with a start spacing.
    return s3.split(' ').length;
}
