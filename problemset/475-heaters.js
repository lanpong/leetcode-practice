// Winter is coming! Your first job during the contest is to design a standard heater with fixed warm radius to warm all the houses.

// Now, you are given positions of houses and heaters on a horizontal line, find out minimum radius of heaters so that all houses could be covered by those heaters.

// So, your input will be the positions of houses and heaters seperately, and your expected output will be the minimum radius standard of heaters.

// Note:

// Numbers of houses and heaters you are given are non-negative and will not exceed 25000.
// Positions of houses and heaters you are given are non-negative and will not exceed 10^9.
// As long as a house is in the heaters' warm radius range, it can be warmed.
// All the heaters follow your radius standard and the warm radius will the same.

// Example 1:

// Input: [1,2,3],[2]
// Output: 1
// Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);

  let n = houses.length,
    m = heaters.length,
    min = 0,
    j = 0;
  for (let i = 0; i < n; i++) {
    while (
      j < m - 1 &&
      Math.abs(heaters[j] - houses[i]) >= Math.abs(heaters[j + 1] - houses[i])
    ) {
      j++;
    }
    min = Math.max(min, Math.abs(heaters[j] - houses[i]));
  }
  return min;
};
