const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr_n = String(n).split("");
  let arr_value = [];
  let length = arr_n.length;
  for (let i = 0; i < length; i++) {
    arr_n = String(n).split("");
    arr_n.splice(i, 1);
    arr_value.push(Number(arr_n.join("")));  
  }
  return Math.max(...arr_value);
}

// max = deleteDigit(152);
// console.log(max);

module.exports = {
  deleteDigit
};
