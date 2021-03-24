const CustomError = require("../extensions/custom-error");

module.exports = function transform(/*arr*/) {
  throw new CustomError('Not implemented');
  for(let i = 0; i < arr.length; i++)
  {
    if(arr[i] == '--discard-next')
    {
      if(arr[i+1] == undefined)
        arr.splice(i--);
      else
        arr.splice(i, 2);  
    }
    if(arr[i] == '--discard-prev')
    {
      if(arr[i-1] == undefined)
        arr.splice(i--);
      else
        arr.splice(i-1, 2);  
    }
    if(arr[i] == '--double-next')
    {
      if(arr[i+1] == undefined)
        arr.splice(i--);
      else
        arr[i] = arr[i+1]; 
    }
    if(arr[i] == '--double-prev')
    {
      if(arr[i-1] == undefined)
        arr.splice(i--);
      else
        arr[i] = arr[i-1]; 
    }
  }

  return arr;
};
