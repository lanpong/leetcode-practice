// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let len = nums.length;
  if (len === 0 || len === 1) return false;

  for (let i = 0; i < len; i++) {
    let temp = nums[i];
    for (let j = i + 1; j < len; j++) {
      if (temp === nums[j]) {
        return true;
      }
    }
  }

  return false;
};
