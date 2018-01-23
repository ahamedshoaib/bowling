const calculateScore = (rolls) => {
  const numRolls = rolls.length;

  let rollCount = 0; // count of current roll
  let score = 0; // score not including any bonus

  let frameNumber = 0; // number of current frame
  let frameCount = 0; // count of current roll in frame
  let frameScore = 0; // score of current frame

  // is current frame a spare or strike
  let isSpare = false;
  let isStrike = false;

  // bonus got from spares and strikes
  let spareBonus = 0;
  let strikeBonus = 0;

  for (rollCount = 0; rollCount < numRolls; rollCount += 1) {
    // total frames in a game of bowling is 10
    if (frameNumber < 10) {

      score += rolls[rollCount];
      frameScore += rolls[rollCount];

      // check if current frame is a strike or spare
      if (frameScore === 10 && frameCount === 0) {
        isStrike = true;
      } else if (frameScore === 10) {
        isSpare = true;
      }

      // calculate and add bonus from current frame
      if (isStrike) {
        strikeBonus += rolls[rollCount + 1] + rolls[rollCount + 2];
        isStrike = false;
      } else if (isSpare) {
        spareBonus += rolls[rollCount + 1];
        isSpare = false;
      }

      frameCount += 1;
      // increment frame number and reset frame variables if new frame
      if (frameCount === 2 || frameScore === 10) {
        frameNumber += 1;
        frameCount = 0;
        frameScore = 0;
      }
    }
  }
  return score + spareBonus + strikeBonus;
};

module.exports = calculateScore;
