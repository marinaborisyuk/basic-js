const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let t = 0;
  for(let i = 1; i <= disksNumber; i++)
  {
    t = 2 * t + 1;
  }

  let timeT = Math.floor(t / (turnsSpeed) * 3600);

  let obj = {
    turns: t,
    seconds: timeT
  }

  return obj;
};
