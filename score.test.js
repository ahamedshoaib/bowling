const score = require('./score');

describe('all throws are not spares or strikes', () => {
  test('given all throws as 0 return 0 (all gutter balls)', () => {
    const input = [];
    const output = 0;
    expect(score(input)).toBe(output);
  });

  test('given all throws as 1 return 20 (20 throws of 1)', () => {
    const input = [];
    const output = 0;
    expect(score(input)).toBe(output);
  });
});

