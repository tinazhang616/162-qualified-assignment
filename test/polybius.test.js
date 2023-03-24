// Write your tests here!
const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");
describe("polybiusModule", () => {
  it("Should return the number message when encode", () => {
    const expected = "4432423352125413";
    const actual = polybiusModule.polybius("thinkful");
    expect(actual).to.equal(expected);
  });
  it("Should return the text message when decode", () => {
    const expected = "hello world";
    const actual = polybiusModule.polybius("3251131343 2543241341", false);
    expect(actual).to.equal(expected);
  });
  it("Should return false when number of characters in the string excluding spaces is odd", () => {
    const actual = polybiusModule.polybius("44324233521254134", false);
    expect(actual).to.be.false;
  });
});
