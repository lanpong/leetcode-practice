/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let count = 0;
  for (let i of S) {
    if (J.includes(i)) {
      count++;
    }
  }
  return count;
};
