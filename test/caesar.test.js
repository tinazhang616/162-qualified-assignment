// Write your tests here!
const expect = require("chai").expect;
const caesarModule = require("../src/caesar");
describe("caesarModule", () => {
  it("Should return the encode message when encode", () => {
    const expected = "wklqnixo";
    const actual = caesarModule.caesar("thinkful", 3, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("Should return the decode message when decode", () => {
    const expected = "this is a secret message!";
    const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.equal(expected);
  });
  it("Should return false if shift value not equal to 25",()=>{
    const actual = caesarModule.caesar("thinkful", 99);
    expect(actual).to.be.false;
  })
});
