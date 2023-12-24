const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members)) {
    return false;
  }
  let NewName = "";
  for (let i = 0; i < members.length; i++) {
    if (!(typeof members[i] === 'string')) {
      continue;
    }
    member_team = members[i].trim();
    if (NewName === "") {
      NewName = member_team[0].toUpperCase();
    }
    else {
      NewName = NewName + member_team[0].toUpperCase();     
    }
  }
  NewName = Array.from(NewName);
  NewName = NewName.sort().join('');
  return NewName;
}

// h = createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]);

// console.log(h);

module.exports = {
  createDreamTeam
};
