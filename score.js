const calculateScore = (rolls) => {
  const numRolls = rolls.length;

  let rollCount = 0;
  let score = 0;

  let frameNumber = 0;
  let frameCount = 0;
  let frameScore = 0;

  let isSpare = false;
  let isStrike = false;

  let spareBonus = 0;
  let strikeBonus = 0;

  for (rollCount = 0; rollCount < numRolls; rollCount += 1) {
    if (frameNumber < 10) {
      if (frameCount === 2 || frameScore === 10) {
        frameNumber += 1;
        frameCount = 0;
        frameScore = 0;
      }

      score += rolls[rollCount];
      frameScore += rolls[rollCount];

      if (frameScore === 10 && frameCount === 0) {
        isStrike = true;
      } else if (frameScore === 10) {
        isSpare = true;
      }

      if (isStrike) {
        strikeBonus += rolls[rollCount + 1] + rolls[rollCount + 2];
        isStrike = false;
      } else if (isSpare) {
        spareBonus += rolls[rollCount + 1];
        isSpare = false;
      }

      frameCount += 1;
    }
  }
  return score + spareBonus + strikeBonus;
};

module.exports = calculateScore;
