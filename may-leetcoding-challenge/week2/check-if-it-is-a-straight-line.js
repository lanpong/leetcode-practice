// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// 检查给定一组坐标的数组组成的是不是一条直线
// 简单解法就是计算每两个坐标的向量是不是一样的即可

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  let n = coordinates.length;

  let x = coordinates[1][0] - coordinates[0][0];
  let y = coordinates[1][1] - coordinates[0][1];

  for (let i = 2; i < n; i++) {
    if (
      (coordinates[i][0] - coordinates[0][0]) * y !==
      (coordinates[i][1] - coordinates[0][1]) * x
    ) {
      return false;
    }
  }

  return true;
};
