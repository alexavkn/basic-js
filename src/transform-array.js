const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");   
  }
  new_arr = Array.from(arr);
  let length = new_arr.length;
  for (let i = 0; i < length; i++) {
    if (new_arr[i] === '--double-next') {
      if (i < length - 1) {
        new_arr[i] = arr[i + 1];
      }
      else {
        new_arr.splice(length - 1);
      }
    }
    if (new_arr[i] === '--double-prev') {
      if (i > 0) {
        new_arr[i] = arr[i - 1];
      }
      else {
        new_arr.splice(0, 1);
      }
    }
    if (new_arr[i] === '--discard-next') {
      if (new_arr[i + 2] === '--double-prev' || new_arr[i + 2] === '--discard-prev') {
        new_arr.splice(i + 2, 1);
        length = length - 1;
      }
      if (i < length - 1) {
        new_arr.splice(i + 1, 1);
        new_arr.splice(i, 1);
        i = i - 2;
        length = length - 2;
      }
      else {
        new_arr.splice(length - 1);
        i = i - 1;
        length = length - 1;
      }
    }
    if (new_arr[i] === '--discard-prev') {
      if (i > 0) {
        new_arr.splice(i, 1);
        new_arr.splice(i - 1, 1);
        i = i - 2;
        length = length - 2;
      }
      else {
        new_arr.splice(0, 1);
        i = i - 1;
        length = length - 1;
      }
    }
  }
  return new_arr;
}

// new_arr = transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]);

// console.log(new_arr);

module.exports = {
  transform
};
