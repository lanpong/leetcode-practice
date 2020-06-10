// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

// 查找插入的位置

// 简单的循环查找即可
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

// 二分法查找
var searchInsert = function (nums, target) {
  let len = nums.length;
  if (target > nums[len - 1]) {
    return len;
  }

  let left = 0,
    right = len;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return right;
};
