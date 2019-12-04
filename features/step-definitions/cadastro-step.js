const {Given, When, Then} = require('cucumber');
const expect = require('expect-puppeteer');

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(50 * 1000);

const scope = require('../support/scope');
const { visitHome } = require('../support/actions');
const assert = require('assert');

Given('Que estou na pagina inicial da aplicação', visitHome);

When('Eu apertar em {string}', function (txtLogin) {
    //return expect(scope.context.currentPage).toClick('div[id="login"]', {id: txtLogin});
    return 'pending';
  });