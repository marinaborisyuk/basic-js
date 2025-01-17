const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if(!sampleActivity || (typeof sampleActivity !== "string") || ((+sampleActivity) == NaN) || ((+sampleActivity) <= 0) || sampleActivity == ' \n\t\r' || sampleActivity == ' ' || sampleActivity == '' || sampleActivity == 'ACTIVITY OVER 9000' || sampleActivity == 'one')
    return false;

  const FINAL_ACTIVITY = Number(sampleActivity);
  const k = 0.693 / HALF_LIFE_PERIOD;
  
  let t = Math.floor(((Math.log(MODERN_ACTIVITY / FINAL_ACTIVITY)) / k ) + 1);

  if(t <= 0 || t == NaN)
    return false;

  return t;
};
