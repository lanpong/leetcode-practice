// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

// 给定字符串数组，分类字符相同的元素 eg: 'eta' 'eat' 'tea' 是属于同一个

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let res = {};
  for (let str of strs) {
    // 排序后比较
    let temp = [...str].sort().join("");
    if (res[temp]) {
      res[temp].push(str);
    } else {
      res[temp] = [str];
    }
  }
  return Object.values(res);
};
