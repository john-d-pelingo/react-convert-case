import countWords from './countWords';

describe('countWords', () => {
  it('should return 0 words', () => {
    expect(countWords('')).toBe(0);
  });

  it('should return 1 words', () => {
    expect(countWords('kappaccino')).toBe(1);
  });

  it('should return 10 words', () => {
    expect(countWords('0 one 2 three 4 five 6 seven 8 nine')).toBe(10);
  });
});
