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

export function getPresentLastText(state) {
    return getPresentText(state).last;
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
