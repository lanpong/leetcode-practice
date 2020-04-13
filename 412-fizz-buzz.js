/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  var string = [];
  for (var i = 1; i <= n; i++) {
    string[i] = "";
    if (i % 3 === 0) {
      string[i] += "Fizz";
    }
    if (i % 5 === 0) {
      string[i] += "Buzz";
    }
    if (string[i] === "") {
      string[i] += i;
    }
  }
  return string.slice(1);
};
