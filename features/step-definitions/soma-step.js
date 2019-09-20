const expect = require("chai");

module.exports = function () {
    var a = 0;
    var b = 0;

    this.When(/^I sum "([^"]*)" plus "([^"]*)"$/, function (valor1, valor2) {
        this.a = valor1;
        this.b = valor2;
    })

    this.Then(/^The result should be "([^"]*)"$/, function (res) {
        var result = a + b;

        expect(result).to.be.eql(res);
    })

}