const CustomError = require("../extensions/custom-error");
module.exports = function createDreamTeam(members) {

  if(!members || members.length <= 0)
    return false;

  let str = '';
  for(let i = 0; i < members.length; i++)
  {
    if(typeof members[i] == 'string')
    {
      while(members[i].charAt(0) == ' '){
        members[i] = members[i].replace(' ', '');
      }
      str += (members[i]).charAt(0);
    }
  }
  str = str.toUpperCase().split('').sort().join('');

  return str;
};
