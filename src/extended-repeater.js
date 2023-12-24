const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator ="|"} = options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let new_str = "";
  let new_str_add = "";
  str = String(str);
  separator = String(separator);
  if (!(addition === undefined)) {
    addition = String(addition);
  }
  additionSeparator = String(additionSeparator);
  if (repeatTimes) {
    for (let i = 1; i <= repeatTimes; i++) {
      if (separator) {
        if (addition) {
          if (additionRepeatTimes) {
            if (additionSeparator) {
              if (new_str_add === "") {
                for (let j = 1; j <= additionRepeatTimes; j++) {
                  new_str_add = new_str_add + addition + ((j === additionRepeatTimes) ? "" : additionSeparator);
                }
              }
              new_str = new_str + str + new_str_add + ((i === repeatTimes) ? "" : separator);
            }
            else
            {
              if (new_str_add === "") {
                for (let j = 1; j <= additionRepeatTimes; j++) {
                  new_str_add = new_str_add + addition;
                }
              }
              new_str = new_str + str + new_str_add + ((i === repeatTimes) ? "" : separator);
            }  
          }
          else {
            new_str = new_str + str + addition + ((i === repeatTimes) ? "" : separator);  
          }
        }
        else
        {
          new_str = new_str + str + ((i === repeatTimes) ? "" : separator);   
        }   
      }
      else {
        if (addition) {
          if (additionRepeatTimes) {
            if (additionSeparator) {
              if (new_str_add === "") {
                for (let j = 1; j <= additionRepeatTimes; j++) {
                  new_str_add = new_str_add + addition + ((j === additionRepeatTimes) ? "" : additionSeparator);
                }
              }
              new_str = new_str + str + new_str_add;
            }
            else
            {
              if (new_str_add === "") {
                for (let j = 1; j <= additionRepeatTimes; j++) {
                  new_str_add = new_str_add + addition;
                }
              }
              new_str = new_str + str + new_str_add;
            }  
          }
          else {
            new_str = new_str + str + addition;  
          }
        }
        else
        {
          new_str = new_str + str;  
        }
      }  
    }
  }
  else {
    if (addition) {
      if (additionRepeatTimes) {
        if (additionSeparator) {
          if (new_str_add === "") {
            for (let j = 1; j <= additionRepeatTimes; j++) {
              new_str_add = new_str_add + addition + ((j === additionRepeatTimes) ? "" : additionSeparator);
            }
          }
          new_str = new_str + str + new_str_add;
        }
        else
        {
          if (new_str_add === "") {
            for (let j = 1; j <= additionRepeatTimes; j++) {
              new_str_add = new_str_add + addition;
            }
          }
          new_str = new_str + str + new_str_add;
        }  
      }
      else {
        new_str = new_str + str + addition;  
      }
    }
    else
    {
      new_str = new_str + str;   
    }   
  }
  return new_str;
}

//console.log(repeater("test", {repeatTimes: 3, separator: "**", addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00'}));
//console.log(repeater('la', { repeatTimes: 3 }));
//console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }));
//console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }));
//console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }));

module.exports = {
  repeater
};
