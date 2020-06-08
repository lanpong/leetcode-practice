// Given an integer, write a function to determine if it is a power of two.

// Example 1:

// Input: 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: 218
// Output: false

// 给一个整数，确定是否为 2 的幂
// 观察 2幂 的 2进制表达
// 所有的 2幂只有 2进制表达只有一个1， 与（&）一下 n-1 得到的就是 零

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return n > 0 && !(n & (n - 1));
};
