// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char in map) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (map[char] === 1) {
      return i;
    }
  }
  return -1;
};
