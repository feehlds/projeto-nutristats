const {Given, When, Then} = require('cucumber');
const expect = require('expect-puppeteer');

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(50 * 1000);

const scope = require('../support/scope');
const { visitHome } = require('../support/actions');
const assert = require('assert');

When('Eu acesso a página inicial da aplicação', visitHome);
Given('Que eu acessar o site de nutristats', visitHome);


// Given('Que eu acessar o site de nutristats', async function () {
//     // Write code here that turns the phrase above into concrete actions
//     let headless = false;
//     let slowMo = 100;

//     scope.browser = await scope.driver.launch({headless, slowMo, args: ['--no-sandbox']});
//     scope.context.currentPage = await scope.browser.newPage();
//     scope.context.currentPage.setViewport({ width: 1280, height: 1024});

//     const urlToVisit = scope.host

//     const visit = await scope.context.currentPage.goto(urlToVisit, {
//         waitUntil: 'networkidle2'
//     });

//     return visit;
//   });

  When('Eu digitar um alimento como {string}', async (alimento) =>{
     await expect(scope.context.currentPage).toFill('input[id="barraPesquisa"]', alimento);
    //return 'pending';
  });

  When('Eu clicar em {string}', function (txtBotao) {
    return expect(scope.context.currentPage).toClick('button', {text: txtBotao});
   
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
 /* Then('Deve ser apresentado a {string} do nutriente', async (info) => {
    await expect(scope.context.currentPage).toFill('b', info);
    var result = await scope.context.currentPage.$eval('b', element => element.innerText);
    
    var buscado = info.toLowerCase();
    var encontrado = result.toLowerCase();
    console.log("AAAAAAAAAAAAAAAAAAAA",encontrado)
    assert.equal(true,encontrado.indexOf(buscado) != -1);
  });*/