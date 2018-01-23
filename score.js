const calculateScore = (rolls) => {
  const numRolls = rolls.length;

  let score = 0;
  let rollCount = 0;
  let frameCount = 0;
  let spareBonus = 0;

  let isSpare = false;

  let frameScore = 0;

  for (rollCount = 0; rollCount < numRolls; rollCount += 1) {
    if (rollCount % 2 === 0) {
      frameCount += 1;
      frameScore = 0;
    }

    score += rolls[rollCount];
    frameScore += rolls[rollCount];

    if (frameScore === 10) {
      isSpare = true;
    }

    if (isSpare) {
      spareBonus += rolls[rollCount + 1];
      isSpare = false;
    }
  }
  return score + spareBonus;
};

module.exports = calculateScore;
