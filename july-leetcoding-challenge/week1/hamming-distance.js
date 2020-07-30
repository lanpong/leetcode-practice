// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 231.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// The above arrows point to positions where the corresponding bits are different.

// 在信息论中，两个等长字符串之间的汉明距离（英语：Hamming distance）是两个字符串对应位置的不同字符的个数。
// 换句话说，它就是将一个字符串变换成另外一个字符串所需要替换的字符个数。

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let distance = 0;
  let z = x ^ y;

  while (z) {
    distance += 1;
    z &= z - 1;
  }

  return distance;
};
