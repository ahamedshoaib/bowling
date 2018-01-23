const calculateScore = require('./score');

describe('all throws are not spares or strikes', () => {
  test('given all throws as 0 return 0 (all gutter balls)', () => {
    // setup
    const input = [];
    for (let i = 0; i < 20; i += 1) {
      input.push(0);
    }
    const output = 0;

    // verify
    expect(calculateScore(input)).toBe(output);
  });

  test('given all throws as 1 return 20 (20 throws of 1)', () => {
    // setup
    const input = [];
    for (let i = 0; i < 20; i += 1) {
      input.push(1);
    }
    const output = 20;

    // verify
    expect(calculateScore(input)).toBe(output);
  });
});

describe('single spare in any position except last frame', () => {
  test('given sequence [5, 5, 5, 0...] return 20', () => {
    // setup
    const input = [5, 5, 5];
    for (let i = 3; i < 20; i += 1) {
      input.push(0);
    }
    const output = 20;

    // verify
    expect(calculateScore(input)).toBe(output);
  });

  test('given sequence [1, 1, 1, 1, 5, 5, 5, 0...] return 24)', () => {
    // setup
    const input = [1, 1, 1, 1, 5, 5, 5];
    for (let i = 7; i < 20; i += 1) {
      input.push(0);
    }
    const output = 0;

    // verify
    expect(calculateScore(input)).toBe(output);
  });
});

