// There are 2N people a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1].

// Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

// Example 1:

// Input: [[10,20],[30,200],[400,50],[30,20]]
// Output: 110
// Explanation:
// The first person goes to city A for a cost of 10.
// The second person goes to city A for a cost of 30.
// The third person goes to city B for a cost of 50.
// The fourth person goes to city B for a cost of 20.

// The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.

// Note:

// 1 <= costs.length <= 100
// It is guaranteed that costs.length is even.
// 1 <= costs[i][0], costs[i][1] <= 1000

// 我们可以通过计算去A市、B市之间花费的差值cost[i][0]-cost[i][1]，
// 来判断哪一部分人去A市，哪一部分人去B市，差值最小的人去A市，因为差值越小，
// 去A市是越省钱的。只要把去A市的人确定了，剩下的都去B市就行。

// 结合题目的示例来看，原数组是[[10,20]，[30,200]，[400,50]，[30,20]]，
// 计算去A市、B市之间花费的差值，数组变成了[-10,-170,350,10]，
// 将差值数组排序后，得到[-170,-10,10,350]，前面的两个差值去A市，
// 后面的两个差值去B市。其中差值最小的一组是[30,200]，它们的差值是-170，
// 去A市比去B市少花170，所以去A市更加省钱。

// 思路：借助Arrays的sort方法，重写compare方法，
//遍历按照差值排序后的数组，前一半元素取A市，后一半元素去B市，返回累加的最小花费。

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  costs = costs.sort((a, b) => b[0] - b[1] - (a[0] - a[1]));
  var minCost = 0,
    i;
  for (i = 0; i < costs.length / 2; i++) {
    minCost += costs[i][1];
  }
  for (i = costs.length / 2; i < costs.length; i++) {
    minCost += costs[i][0];
  }
  return minCost;
};
