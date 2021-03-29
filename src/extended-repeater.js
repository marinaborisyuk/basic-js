const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  if(typeof str != 'string')
    str = String(str);
   

  let newRepeatTimes = options.repeatTimes;
  if(newRepeatTimes == undefined)
    newRepeatTimes = 1;

  let newSeparator = options.separator;
  if(newSeparator == undefined)
    newSeparator = '+';

  let newAddition = options.addition;
  if(typeof newAddition != 'string')
    newAddition = String(newAddition);
  if(newAddition == 'undefined')
    newAddition = '';  

  let newAddititonRepeatTimes = options.additionRepeatTimes;
  if(newAddititonRepeatTimes == undefined)
    newAddititonRepeatTimes = 1;
    
  let newAdditonSeparator = options.additionSeparator;
  if(newAdditonSeparator == undefined)
    newAdditonSeparator = '|';

    let subStr = '';
    for(let j = 0; j < newAddititonRepeatTimes; j++)
    {
      subStr += newAddition;
      if(j != (newAddititonRepeatTimes - 1))
        subStr += newAdditonSeparator;
    }
    
  let result = '';
  for(let i = 0; i < newRepeatTimes; i++)
  {
    result += (str + subStr);
    if(i != (newRepeatTimes - 1))
      result += newSeparator;
  }  

  return result; 
};
  