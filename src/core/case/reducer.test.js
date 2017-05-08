import { CASES } from '../../core/constants';

import { caseReducer } from './reducer';
import {
    RESET_TEXT,
    SET_CAMEL_CASE,
    SET_CONSTANT_CASE,
    SET_DOT_CASE,
    SET_HEADER_CASE,
    SET_LOWER_CASE,
    SET_LOWER_FIRST_CASE,
    SET_NO_CASE,
    SET_PARAM_CASE,
    SET_PASCAL_CASE,
    SET_PATH_CASE,
    SET_SENTENCE_CASE,
    SET_SNAKE_CASE,
    SET_SWAP_CASE,
    SET_TITLE_CASE,
    SET_UPPER_CASE,
    SET_UPPER_FIRST_CASE
} from './action-types';

describe('Case reducer', () => {
    describe('RESET_TEXT', () => {
        it('should return correct state', () => {
            const nextState = caseReducer(null, {
                type: RESET_TEXT,
                payload: {}
            });

            expect(nextState.last).toBe(null);
        });
    });

    describe('SET_CAMEL_CASE', () => {
        it('should return correct state', () => {
            const nextState = caseReducer(null, {
                type: SET_CAMEL_CASE,
                payload: {
                    newCase: CASES.CAMEL.name,
                    newText: null
                }
            });

            expect(nextState.last).toBe('CAMEL');
        });
    });

    describe('SET_CONSTANT_CASE', () => {
        it('should return correct state', () => {
            const nextState = caseReducer(null, {
                type: SET_CONSTANT_CASE,
                payload: {
                    newCase: CASES.CONSTANT.name,
                    newText: null
                }
            });

            expect(nextState.last).toBe('CONSTANT');
        });
    });

    describe('SET_DOT_CASE', () => {
        it('should return correct state', () => {
            const nextState = caseReducer(null, {
                type: SET_DOT_CASE,
                payload: {
                    newCase: CASES.DOT.name,
                    newText: null
                }
            });

            expect(nextState.last).toBe('DOT');
        });
    });

    describe('SET_HEADER_CASE', () => {
        it('should return correct state', () => {
            const nextState = caseReducer(null, {
                type: SET_HEADER_CASE,
                payload: {
                    newCase: CASES.HEADER.name,
                    newText: null
                }
            });

            expect(nextState.last).toBe('HEADER');
        });
    });

    describe('SET_LOWER_CASE', () => {
        it('should return correct state', () => {
            const nextState = caseReducer(null, {
                type: SET_LOWER_CASE,
                payload: {
                    newCase: CASES.LOWER.name,
                    newText: null
                }
            });

            expect(nextState.last).toBe('LOWER');
        });
    });

    describe('SET_LOWER_FIRST_CASE', () => {
        it('should return correct state', () => {
            const nextState = caseReducer(null, {
                type: SET_LOWER_FIRST_CASE,
                payload: {
                    newCase: CASES.LOWER_FIRST.name,
                    newText: null
                }
            });

            expect(nextState.last).toBe('LOWER_FIRST');
        });
    });

    describe('SET_NO_CASE', () => {
        it('should return correct state', () => {
            const nextState = caseReducer(null, {
                type: SET_NO_CASE,
                payload: {
                    newCase: CASES.NO.name,
                    newText: null
                }
            });

            expect(nextState.last).toBe('NO');
        });
    });

    describe('SET_PARAM_CASE', () => {
        it('should return correct state', () => {
            const nextState = caseReducer(null, {
                type: SET_PARAM_CASE,
                payload: {
                    newCase: CASES.PARAM.name,
                    newText: null
                }
            });

            expect(nextState.last).toBe('PARAM');
        });
    });

    describe('SET_PASCAL_CASE', () => {
        it('should return correct state', () => {
            const nextState = caseReducer(null, {
                type: SET_PASCAL_CASE,
                payload: {
                    newCase: CASES.PASCAL.name,
                    newText: null
                }
            });

            expect(nextState.last).toBe('PASCAL');
        });
    });

    describe('SET_PATH_CASE', () => {
        it('should return correct state', () => {
            const nextState = caseReducer(null, {
                type: SET_PATH_CASE,
                payload: {
                    newCase: CASES.PATH.name,
                    newText: null
                }
            });

            expect(nextState.last).toBe('PATH');
        });
    });

    describe('SET_SENTENCE_CASE', () => {
        it('should return correct state', () => {
            const nextState = caseReducer(null, {
                type: SET_SENTENCE_CASE,
                payload: {
                    newCase: CASES.SENTENCE.name,
                    newText: null
                }
            });

            expect(nextState.last).toBe('SENTENCE');
        });
    });

    describe('SET_SNAKE_CASE', () => {
        it('should return correct state', () => {
            const nextState = caseReducer(null, {
                type: SET_SNAKE_CASE,
                payload: {
                    newCase: CASES.SNAKE.name,
                    newText: null
                }
            });

            expect(nextState.last).toBe('SNAKE');
        });
    });

    describe('SET_SWAP_CASE', () => {
        it('should return correct state', () => {
            const nextState = caseReducer(null, {
                type: SET_SWAP_CASE,
                payload: {
                    newCase: CASES.SWAP.name,
                    newText: null
                }
            });

            expect(nextState.last).toBe('SWAP');
        });
    });

    describe('SET_TITLE_CASE', () => {
        it('should return correct state', () => {
            const nextState = caseReducer(null, {
                type: SET_TITLE_CASE,
                payload: {
                    newCase: CASES.TITLE.name,
                    newText: null
                }
            });

            expect(nextState.last).toBe('TITLE');
        });
    });

    describe('SET_UPPER_CASE', () => {
        it('should return correct state', () => {
            const nextState = caseReducer(null, {
                type: SET_UPPER_CASE,
                payload: {
                    newCase: CASES.UPPER.name,
                    newText: null
                }
            });

            expect(nextState.last).toBe('UPPER');
        });
    });

    describe('SET_UPPER_FIRST_CASE', () => {
        it('should return correct state', () => {
            const nextState = caseReducer(null, {
                type: SET_UPPER_FIRST_CASE,
                payload: {
                    newCase: CASES.UPPER_FIRST.name,
                    newText: null
                }
            });

            expect(nextState.last).toBe('UPPER_FIRST');
        });
    });
});
