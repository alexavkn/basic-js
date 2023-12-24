const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr_s1 = s1.split("");
  let arr_s2 = s2.split("");
  let arr_s2_index = 0;
  let matched = 0;

  // const arrUniq = (arr) => [...new Set(arr)];

  // arr_s1 = arrUniq(arr_s1);
  // arr_s2 = arrUniq(arr_s2);

  // matched = arr_s1.filter(el => arr_s2.indexOf(el) > -1);

  for (let i = 0; i < arr_s1.length; i++) {
    arr_s2_index = arr_s2.indexOf(arr_s1[i]);
    if (arr_s2_index > -1) {
      arr_s2.splice(arr_s2_index, 1);
      matched++;  
    } 
  }

  return matched;

}

// matched = getCommonCharacterCount('aabcc', 'adcaa');
// console.log(matched);

module.exports = {
  getCommonCharacterCount
};
