const expect = require('chai').expect;
const math = require('../app/math');

// AAA
// Test Suite
describe("testing math functionalites", () => {
    //@Test
    it("test add", () => {
        let expected = 35;
        expect(math.add(20,15)).to.be.equal(expected);
    })

    it("test sub", () => {
        let expected = 5;
        expect(math.sub(20,15)).to.be.equal(expected);
    })
})