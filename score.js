const calculateScore = (throws) => {
  let score = 0;
  for (let i = 0; i < throws.length; i += 1) {
    score += throws[i];
  }
  return score;
};

module.exports = calculateScore;
