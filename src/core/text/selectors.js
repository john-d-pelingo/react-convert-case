export function getText(state) {
    return state.text;
}

export function getPastText(state) {
    return getText(state).past;
}

export function isPastTextEmpty(state) {
    return getPastText(state).length === 0;
}

export function getPresentText(state) {
    return getText(state).present;
}

export function getPresentCopiedText(state) {
    return getPresentText(state).copied;
}

export function getPresentCurrentText(state) {
    return getPresentText(state).current;
}

export function getPresentCurrentTextCharacterCount(state) {
    return getPresentCurrentText(state).length;
}

export function getPresentCurrentTextWordCount(state) {
    return countWords(getPresentCurrentText(state));
}

export function getPresentLastCasedText(state) {
    return getPresentText(state).lastCased;
}

export function getFutureText(state) {
    return getText(state).future;
}

export function isFutureTextEmpty(state) {
    return getFutureText(state).length === 0;
}

function countWords(s) {
    if (!s.trim()) return 0;

    const s1 = s.replace(/(^\s*)|(\s*$)/gi, ''); // Exclude start and end white-space.
    const s2 = s1.replace(/[ ]{2,}/gi, ' '); // 2 or more space to 1.
    // eslint-disable-next-line quotes
    const s3 = s2.replace(/\n /, "\n"); // Exclude newline with a start spacing.
    return s3.split(' ').length;
}
