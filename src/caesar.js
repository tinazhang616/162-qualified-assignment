// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    //reutrn false if shift not meet requirement
    if (shift < -25 || shift > 25 || !shift) {
      return false;
    }
    let referString = "abcdefghijklmnopqrstuvwxyz".split("");
    //split input into array to loop
    let codeMessage = input.toLowerCase().split("");
    let newMessage = "";
    shift = !encode ? shift * -1 : shift;
    codeMessage.forEach((letter) => {
      if (!referString.includes(letter)) {
        newMessage += letter;
      }
      referString.forEach((character, index) => {
        if (character == letter) {
          index += shift;
          index = index > 25 ? index - 26 : index;
          index = index < 0 ? index + 26 : index;
          let newCharacter = referString[index];
          newMessage += newCharacter;
        }
      });
    });
    return newMessage;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
