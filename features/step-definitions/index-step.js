const {Given, When, Then} = require('cucumber');
const expect = require('expect-puppeteer');

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(50 * 1000);

const scope = require('../support/scope');
const { visitHome } = require('../support/actions');
const assert = require('assert');

When('Eu acesso a página inicial da aplicação', visitHome);
Given('Que eu acessar o site de nutristats', visitHome);

  When('Eu digitar um alimento como {string}', async (alimento) =>{
     await expect(scope.context.currentPage).toFill('input[id="barraPesquisa"]', alimento);

  });

  When('Eu clicar em {string}', function (txtBotao) {
    return expect(scope.context.currentPage).toClick('button', {text: txtBotao});
   
  });
  Then("Devo ser redirecionado para a página {string}", async(page_name) => {

    await scope.context.currentPage.waitForNavigation();
   
    assert.equal(scope.map_of_pages[page_name], scope.context.currentPage.url());
});

  Then('Devo ser apresentado os nutrientes relacionados a {string}', async (alimento) => {
    await expect(scope.context.currentPage).toFill('b', alimento);
    var result = await scope.context.currentPage.$eval('b', element => element.innerText);
    var buscado = alimento.toLowerCase();
    var encontrado = result.toLowerCase();
    assert.equal(true,encontrado.indexOf(buscado) != -1);
  });
  When('Eu consultar as informções do nutriente clicando em {string}', function (txtBotao) {
    return expect(scope.context.currentPage).toClick('a', {text: txtBotao});
   
  });
