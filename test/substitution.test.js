// Write your tests here!
// Write your tests here!
const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");
describe("substitutionModule", () => {
  it("Should return encode message", () => {
    const expected = 'jrufscpw';
    const actual = substitutionModule.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
  it("Should return the decode message", () => {
    const expected = "message";
    const actual = substitutionModule.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    expect(actual).to.equal(expected);
  });
  it("Should return false when reference alphabet is not 26 characters", () => {
    const actual = substitutionModule.substitution("thinkful", "short");
    expect(actual).to.be.false;
  });
});
