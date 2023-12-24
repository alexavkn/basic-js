const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!(typeof sampleActivity === 'string')) {
    return false;
  }

  let param = Number(sampleActivity);
  let is_nun = isNaN(param);

  if (is_nun) {
    return !is_nun;
  }

  if (param <= 0) {
    return false;
  }
  
  k = Math.log(2)/HALF_LIFE_PERIOD;

  t = Math.log(MODERN_ACTIVITY/param)/k;

  if (t <= 0) {
    return false;
  }
   
  return Math.ceil(t);
}

// t = dateSample(null);
// console.log(t);

module.exports = {
  dateSample
};
