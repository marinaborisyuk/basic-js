const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(/*date*/) {
  throw new CustomError('Not implemented');

  // if(!data || data.getFullYear() <= '1970')
  //   return 'Unable to determine the time of year!';

  // let newDate = 

  // if((data.getMonth() >= 0 && data.getMonth() <=1) || data.getMonth() == 11)
  //   return 'winter';
  // if(data.getMonth() >= 2 && data.getMonth() <=4)
  //   return 'spring';

  //   if(data.getMonth() >= 5 && data.getMonth() <=7)
  //   return 'summer';  

  //   if(data.getMonth() >= 8 && data.getMonth() <=10)
  //   return 'autumn';
};
