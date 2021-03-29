const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt() {
    throw new CustomError('Not implemented');

  }    
  decrypt() {
    throw new CustomError('Not implemented');
  }
}

module.exports = VigenereCipheringMachine;
