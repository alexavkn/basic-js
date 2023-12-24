const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 0;
    this.current_depth = 1;
    this.return_depth = 0;
  }
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (Array.isArray(arr)) {
      this.depth = Math.max(this.depth, this.current_depth);    
    }
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.current_depth = this.current_depth + 1;
        this.depth = Math.max(this.depth, this.current_depth);
        this.calculateDepth(arr[i]);  
      }
    }
    this.current_depth = this.current_depth - 1;
    if (!this.current_depth) {
      this.return_depth = this.depth;
      this.depth = 0;
      this.current_depth = 1;
      return this.return_depth;
    }
  }
}

function DepthCalc() {
  // console.log(depth_calc.calculateDepth([1, 2, 3, 4, 5]));
  // depth_calc.depth = 0;
  // depth_calc.current_depth = 1;  
  //console.log(depth_calc.calculateDepth([1, 2, 3, [4, 5]]));
  // depth_calc.depth = 0;
  // depth_calc.current_depth = 1;
  //console.log(depth_calc.calculateDepth([[[[[]]]]]));
  // depth_calc.depth = 0;
  // depth_calc.current_depth = 1;
  // console.log(depth_calc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]));
  // depth_calc.depth = 0;
  // depth_calc.current_depth = 1;
  // console.log(depth_calc.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]));
}

let depth_calc = new DepthCalculator();

DepthCalc();

module.exports = {
  DepthCalculator
};
