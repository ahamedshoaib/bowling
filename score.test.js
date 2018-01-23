const calculateScore = require('./score');

// assuming valid inputs ie a game of full 10 frames
// not testing for invalid inputs like empty input, incorrect number of inputs ,or imposible inputs

describe('all rolls are not spares or strikes', () => {
  test('given all rolls as 0 return 0 (all gutter balls)', () => {
    // setup
    const input = [];
    for (let i = 0; i < 20; i += 1) {
      input.push(0);
    }
    const output = 0;

    // verify
    expect(calculateScore(input)).toBe(output);
  });

  test('given all rolls as 1 return 20 (20 throws of 1)', () => {
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
  test('spare at the begining: given sequence [5, 5, 5, 0...] return 20', () => {
    // setup
    const input = [5, 5, 5];
    for (let i = 3; i < 20; i += 1) {
      input.push(0);
    }
    const output = 20;

    // verify
    expect(calculateScore(input)).toBe(output);
  });

  test('spare in the middle: given sequence [1, 1, 1, 1, 5, 5, 5, 0...] return 24)', () => {
    // setup
    const input = [1, 1, 1, 1, 5, 5, 5];
    for (let i = 7; i < 20; i += 1) {
      input.push(0);
    }
    const output = 24;

    // verify
    expect(calculateScore(input)).toBe(output);
  });

  test('given sequence [0, 10] should be spare not strike)', () => {
    // setup
    const input = [0, 10, 2, 2];
    for (let i = 4; i < 20; i += 1) {
      input.push(0);
    }
    const output = 16;

    // verify
    expect(calculateScore(input)).toBe(output);
  });
});

describe('single strike in any position except last frame', () => {
  test('strike at the begining: given sequence [10, 4, 4, 0...] return 26', () => {
    // setup
    const input = [10, 4, 4];
    for (let i = 3; i < 20; i += 1) {
      input.push(0);
    }
    const output = 26;

    // verify
    expect(calculateScore(input)).toBe(output);
  });

  test('strike in the middle: given sequence [1, 1, 1, 1, 10, 3, 2, 0...] return 26)', () => {
    // setup
    const input = [1, 1, 1, 1, 10, 3, 3];
    for (let i = 7; i < 20; i += 1) {
      input.push(0);
    }
    const output = 26;

    // verify
    expect(calculateScore(input)).toBe(output);
  });
});

describe('multiple strikes in any position except last frame', () => {
  test('2 consecutive strikes', () => {
    // setup
    const input = [10, 10, 4, 4]; // 24+18+4+4 = 50
    for (let i = 3; i < 20; i += 1) {
      input.push(0);
    }
    const output = 50;

    // verify
    expect(calculateScore(input)).toBe(output);
  });

  test('2 strikes in two different places', () => {
    // setup
    const input = [10, 4, 4, 0, 0, 0, 0, 10, 2, 2]; // 18+4+4+14+2+2 = 44
    for (let i = 10; i < 20; i += 1) {
      input.push(0);
    }
    const output = 44;

    // verify
    expect(calculateScore(input)).toBe(output);
  });

  test('3 consecutive strikes and a strike somewhere else', () => {
    // setup
    const input = [10, 10, 10, 4, 4, 0, 0, 0, 0, 10, 2, 2]; // 30+24+18+4+4+14+2+2 = 98
    for (let i = 3; i < 20; i += 1) {
      input.push(0);
    }
    const output = 98;

    // verify
    expect(calculateScore(input)).toBe(output);
  });
});

describe('multiple spares in any position except last frame', () => {
  // 2 infront
  // 1 in front and middle
  // 3 in front and 1 in middle
});

describe('multiple spares and strikes in any position except last frame', () => {
  // strike spare sequence
  // spare strike sequence
});

describe('strike and spare in last frame', () => {
  test('all 1s and strike in last frame', () => {
    // setup
    const input = []; // 18+16 = 34
    for (let i = 0; i < 20; i += 1) {
      input.push(1);
    }
    input[18] = 10;
    input[19] = 4;
    input[20] = 2;
    const output = 34;

    // verify
    expect(calculateScore(input)).toBe(output);
  });
});

describe('perfect game', () => {
  test('perfect game(all strikes should return 300', () => {
    // setup
    const input = [];
    for (let i = 0; i < 12; i += 1) {
      input.push(10);
    }
    const output = 300;

    // verify
    expect(calculateScore(input)).toBe(output);
  });
});
