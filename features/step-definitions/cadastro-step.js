const {Given, When, Then} = require('cucumber');
const expect = require('expect-puppeteer');

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(100 * 1000);

const scope = require('../support/scope');
const { visitHome } = require('../support/actions');
const assert = require('assert');

Given('Que estou na pagina inicial da aplicação', visitHome);

When('Eu apertar em {string}', async  (txtLogin) => {
    await expect(scope.context.currentPage).toClick('button', {text: txtLogin});
  });
When('aperta em {string}', async (btnCadastrar)  =>{
  await expect(scope.context.currentPage).toClick('a', {text: btnCadastrar});
});
When('prencher o formulário com os campos: nome: {string}, email: {string}, data de nascimento: {string}, Sexo; {string}, nomeUsuario: {string}, senha: {string}  confirmarSenha: {string}', async (nome, string2, string3, string4, string5, string6, string7) =>{
   await expect(scope.context.currentPage).toFill('input[id="nomeUser"]', nome);
});