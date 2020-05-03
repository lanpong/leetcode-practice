// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

// 数组里最多的元素

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let s = nums[0],
    count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      count++;
      s = nums[i];
    } else if (s === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return s;
};
