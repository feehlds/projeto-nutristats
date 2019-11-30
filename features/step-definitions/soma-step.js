// const expect = require("chai");

// module.exports = function () {
//     var a = 0;
//     var b = 0;

//     this.When(/^I sum "([^"]*)" plus "([^"]*)"$/, function (valor1, valor2) {
//         this.a = valor1;
//         this.b = valor2;
//     })

//     this.Then(/^The result should be "([^"]*)"$/, function (res) {
//         var result = a + b;

//         expect(result).to.be.eql(res);
//     })

// }

const { Given, When, Then } = require ('cucumber');
const assert = require ('assert');

let primValor = 0;
let segValor = 0;
let resultado = 0;

Given('I am a mathematic teacher', function() {
    // return 'pending';
});

When('I sum {int} plus {int}', function(valor1, valor2) {
    primValor = valor1;
    segValor = valor2;

    resultado = primValor + segValor;

    // return 'pending';
});

When('I subtract {int} and {int}', function(val1, val2){
    primValor = val1;
    segValor = val2;

    resultado = primValor - segValor;

    // return 'pending';
});

Then('The result should be {int}', function(res) {
    // resultado = primValor + segValor;

    assert.equal(resultado, res, "Operação está errada!");

    // return 'pending';
});