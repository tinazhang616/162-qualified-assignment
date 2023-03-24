// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let alphabetString = "abcdefghijklmnopqrstuvwxyz".split("");
  function encodeAMessage(message, alphabet) {
    alphabet = alphabet.split("");
    // console.log(alphabet);
    message = message.toLowerCase().split("");
    let result = "";
    message.forEach((item) => {
      if (!alphabetString.includes(item)) {
        result += item;
      } else {
        alphabetString.find((element, index) => {
          if (element == item) {
            let newLetter = alphabet[index];
            result += newLetter;
          }
        });
      }
    });
    return result;
  }
  function decodeAMessage(message, alphabet) {
    alphabet = alphabet.split("");
    message = message.toLowerCase().split("");
    let result = "";
    message.forEach((item) => {
      if (!alphabet.includes(item)) {
        result += item;
      } else {
        alphabet.find((element, index) => {
          if (element == item) {
            let newLetter = alphabetString[index];
            result += newLetter;
          }
        });
      }
    });
    return result;
  }
  function letterCheck(message) {
    let result = 1;
    message.forEach((item) => {
      let num = message.filter((element) => element == item);
      // console.log(num.length
      if (num.length > result) {
        result = num.length;
      }
    });
    return result == 1 ? true : false;
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    let message = alphabet.split("");
    let check = letterCheck(message);
    if (!check) {
      return check;
    } else {
      if (encode) {
        let result = encodeAMessage(input, alphabet);
        return result;
      } else {
        let result = decodeAMessage(input, alphabet);
        return result;
      }
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
