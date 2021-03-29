const CustomError = require("../extensions/custom-error");

  module.exports = function transform(arr) {
    if(!arr) 
      throw new Error();

    let result = [];
    const keys = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

    for(let i = 0; i < arr.length; i++) 
    {
      if(arr[i] === keys[0]) 
      {
        if(typeof(arr[i + 1]) !== 'undefined') 
          i++;
      }
      else if(arr[i] === keys[1]) 
      {
        if(typeof(arr[i - 1]) !== 'undefined') 
        {
          if(arr[i - 2] !== keys[0]) 
            result.pop();
        }
      }
      else if(arr[i] === keys[2]) 
      {
        if(typeof(arr[i + 1]) !== 'undefined') 
          result.push(arr[i + 1]);
      }
      else if(arr[i] === keys[3]) 
      {
        if(typeof(arr[i - 1]) !== 'undefined') 
        {
          if(arr[i - 2] !== keys[0] ) 
          result.push(result[result.length - 1]);
        }
      }
      else result.push(arr[i]);
    }

    return result;
  };