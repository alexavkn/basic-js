const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  arr_chain: [],

  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.arr_chain.length;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.arr_chain.push("( " + value + " )");
    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!(typeof(position) == "number") || !Number.isInteger(position) || position > this.arr_chain.length || position <= 0) {
      this.arr_chain = [];
      throw new Error ("You can\'t remove incorrect link!");     
    }
    this.arr_chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.arr_chain.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    new_arr = Array.from(this.arr_chain);
    this.arr_chain = [];
    return new_arr.join('~~');
  }
};

//  chain = chainMaker.addLink('ABC').reverseChain().reverseChain().addLink('DEF').removeLink(1).addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(1.233).addLink(1.233).reverseChain().addLink('ABC').finishChain();

//  console.log(chain);

//  chain = chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0);

//  console.log(chain);

module.exports = {
  chainMaker
};
