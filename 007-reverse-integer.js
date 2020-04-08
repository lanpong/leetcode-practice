// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// 题解：这里由于是 js 的缘故，所以需要做一些判断，还需要注意超出限制

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sum = 0;
    while (x !== 0) {
        if (x > 0) {
            sum = sum*10 + x%10;
            x = Math.floor(x/10);
        } 
        if (x < 0) {
            sum = sum*10 + x%10;
            x = Math.ceil(x/10);
        }
        
    }
    return (sum <= 0x7fffffff && sum >= -0x80000000) ? sum : 0;
};