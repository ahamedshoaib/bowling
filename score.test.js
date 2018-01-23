const calculateScore = require('./score');

describe('all throws are not spares or strikes', () => {
  test('given all throws as 0 return 0 (all gutter balls)', () => {
    const input = [];
    const output = 0;
    expect(calculateScore(input)).toBe(output);
  });

  test('given all throws as 1 return 20 (20 throws of 1)', () => {
    const input = [];
    for (let i = 0; i < 20; i += 1) {
      input.push(1);
    }
    const output = 20;
    expect(calculateScore(input)).toBe(output);
  });
});

