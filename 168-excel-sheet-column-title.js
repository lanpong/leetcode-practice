// Given a positive integer, return its corresponding column title as appear in an Excel sheet.

// For example:

//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB
//     ...
// Example 1:

// Input: 1
// Output: "A"
// Example 2:

// Input: 28
// Output: "AB"
// Example 3:

// Input: 701
// Output: "ZY"

// 27 进制

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  if (n <= 26) {
    return String.fromCharCode(65 + n - 1);
  } else {
    let a = Math.floor(n / 26);
    let tmp = n % 26;
    if (tmp === 0) {
      tmp = 26;
      a--;
    }
    let res = "";
    res += convertToTitle(a) + String.fromCharCode(65 + tmp - 1);
    return res;
  }
};
