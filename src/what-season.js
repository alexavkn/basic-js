const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (date == undefined || date == null) {
    return 'Unable to determine the time of year!';
  }
  //let check_date = new Date(date.getFullYear(), date.getMonth(), 0);
  //quantity_day_of_month = check_date.getDate();
  //Y == date.getFullYear() && M == date.getMonth() && D == date.getDate();
  if (date.hasOwnProperty('toString')) {
    throw new Error ('Invalid date!');  
  }
  if (isNaN(Date.parse(date))) {
    throw new Error ('Invalid date!');  
  }
  let month = date.getMonth();
  if (month === 11 || month === 0 || month === 1) {
    return "winter";
  }
  else if (month === 2 || month === 3 || month === 4) {
    return "spring";
  }
  else if (month === 5 || month === 6 || month === 7) {
    return "summer";
  }
  else {
    return "autumn";
  }  
}

// season = getSeason(new Date("2017-02-31"));
// //season = getSeason(Date.prototype.getDate.call(new Date(2019, 7, 8, 9, 10, 11)));
// //season = getSeason('ppts');
// //season = getSeason('');
// console.log(season);

module.exports = {
  getSeason
};
