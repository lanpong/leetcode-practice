// Given an integer n, return the number of trailing zeroes in n!.

// Example 1:

// Input: 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.
// Example 2:

// Input: 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.
// Note: Your solution should be in logarithmic time complexity.

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  // 如果有一个5就会有一个2 就会有一个0
  return n == 0 ? 0 : Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5));
};
