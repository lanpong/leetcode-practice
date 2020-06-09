// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

// Example 1:

// Input: "Hello"
// Output: "hello"
// Example 2:

// Input: "here"
// Output: "here"
// Example 3:

// Input: "LOVELY"
// Output: "lovely"

//

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  let res = "";

  for (let i of str) {
    if (i >= "A" && i <= "Z") {
      res = res + String.fromCharCode(i.charCodeAt() + 32);
    } else {
      res = res + i;
    }
  }

  return res;
};
