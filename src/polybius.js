// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz12345".split("");
  const xCoordination = [
    { number: 1, character: ["a", "f", "l", "q", "v"] },
    { number: 2, character: ["b", "g", "m", "r", "w"] },
    { number: 3, character: ["c", "h", "n", "s", "x"] },
    { number: 4, character: ["d", "i", "j", "o", "t", "y"] },
    { number: 5, character: ["e", "k", "p", "u", "z"] },
  ];
  const yCoordination = [
    { number: 1, character: ["a", "b", "c", "d", "e"] },
    { number: 2, character: ["f", "g", "h", "i", "j", "k"] },
    { number: 3, character: ["l", "m", "n", "o", "p"] },
    { number: 4, character: ["q", "r", "s", "t", "u"] },
    { number: 5, character: ["v", "w", "x", "y", "z"] },
  ];
  function encodeAMessage(message) {//encoding message if encode is true
    let input = message.split("");
    result = "";
    input.forEach((element) => {
      if (!alphabet.includes(element)) {
        result += element;
      } else {
        let x = xCoordination.find((item) => item.character.includes(element));
        result += x.number;
        let y = yCoordination.find((item) => item.character.includes(element));
        result += y.number;
      }
    });
    return result;
  }
  function decodeAMessage(message) {//decoding message if encode is false
    message = message.split("");
    let result = "";
    for (let i = 0, j = i + 1; i < message.length; i++, j++) {
      if (!alphabet.includes(message[i])) {
        result += message[i];
      } else {
        let xCharacters = xCoordination.find(
          (item) => item.number == message[i]
        ).character;
        let yCharacters = yCoordination.find(
          (item) => item.number == message[j]
        ).character;
        let commonCharacter = xCharacters.find((item) =>
          yCharacters.includes(item)
        );
        if (commonCharacter == "i") {
          result += "(i/j)";
        } else {
          result += commonCharacter;
        }
        i++;
        j++;
      }
    }
    return result;
  }
  function identify(message) {//identity the length of decoding a message
    message = message.split("");
    let totalnumbers = [];
    message.forEach((item) => {
      if (alphabet.includes(item)) {
        totalnumbers.push(item);
      }
    });
    return totalnumbers.length % 2 == 0 ? true : false;
  }
  function polybius(input, encode = true) {
    // your solution code here
    let result = "";
    if (encode) {
      let encodeInfo = encodeAMessage(input);
      result += encodeInfo;
    } else {
      let even = identify(input);
      if (!even) {
        return false;
      }
      let decodeInfo = decodeAMessage(input);
      result += decodeInfo;
    }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
