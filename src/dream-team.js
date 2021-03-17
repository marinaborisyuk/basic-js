const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if(!members || members.length <= 0)
  {
    return false;
  }
  let str = '';
  for(let i = 0; i < members.length; i++)
  {
    if(typeof members[i] == 'string')
    {
      str += (members[i]).charAt(0);
    }
  }

  str = str.split().sort().join('').toUpperCase();

  return str;
};
