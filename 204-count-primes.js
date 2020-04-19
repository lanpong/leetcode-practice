// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// 计算小于非负数n的质数数。
// 例： 输入10 输出4 说明：有4个质数小于10，它们是2、3、5、7。

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let isPrimes = [];
  for (let i = 2; i < n; i++) {
    isPrimes[i] = true;
  }

  for (let i = 2; i * i < n; i++) {
    if (!isPrimes[i]) continue;
    for (let j = i * i; j < n; j += i) {
      isPrimes[j] = false;
    }
  }

  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrimes[i]) {
      count++;
    }
  }
  return count;
};
