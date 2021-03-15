const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if(!sampleActivity || (typeof sampleActivity !== "string") || ((+sampleActivity) == NaN) || ((+sampleActivity) <= 0))
  {
    return false;
  }

  const FINAL_ACTIVITY = Number(sampleActivity);
  const k = 0.693 / HALF_LIFE_PERIOD;
  
  let t = (Math.log(MODERN_ACTIVITY / FINAL_ACTIVITY) / (Math.log(10))) / k;

  if(t <= 0 || t == NaN)
  {
    return false;
  }
  return Math.floor(t + 1);
};
