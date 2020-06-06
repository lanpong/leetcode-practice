// uppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

// Note:
// The number of people is less than 1,100.

// Example

// Input:
// [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

// Output:
// [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

// 这道题给了我们一个队列，队列中的每个元素是一个数组，
// 分别为身高和前面身高不低于当前身高的人的个数，
// 让我们重新排列队列，使得每个数组的第二个参数都满足题意。

// 给队列先排个序，按照身高高的排前面，如果身高相同，
// 则第二个数小的排前面。然后新建一个空的数组，
// 遍历之前排好序的数组，然后根据每个元素的第二个数字，
// 将其插入到 res 数组中对应的位置

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let res = [];

  people.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]));

  people.forEach((val) => {
    res.splice(val[1], 0, val);
  });

  return res;
};
