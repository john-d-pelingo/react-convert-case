export function getCase(state) {
    return state.case;
}

export function getLastCase(state) {
    return getCase(state).last;
}
