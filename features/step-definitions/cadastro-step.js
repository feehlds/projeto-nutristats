const {Given, When, Then} = require('cucumber');
const expect = require('expect-puppeteer');

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

const scope = require('../support/scope');
const { visitHome } = require('../support/actions');
const assert = require('assert');

When('Eu acesso a página inicial da aplicação', visitHome);
Given('Que estou na pagina inicial da aplicação', visitHome);

When('Eu apertar em {string}', async  (txtLogin) => {
     return await expect(scope.context.currentPage).toClick('button', {text: txtLogin});
  });
When('aperta em {string}', async (btnCadastrar)  =>{
  
  await expect(scope.context.currentPage).toClick('a', {text: btnCadastrar});
});
When('prencher o formulário com os campos: nome: {string}, email: {string}, data de nascimento: {string}, Sexo; {string}, nomeUsuario: {string}, senha: {string}  confirmarSenha: {string}', async (nome, email, dataNasc, sexo, username, senha, confirmSenhaUser) =>{
 
  await expect(scope.context.currentPage).toFill('input[id="nomeUser"]', nome);
  await expect(scope.context.currentPage).toFill('input[id="email"]', email);
  await expect(scope.context.currentPage).toFill('input[id="dataNasc"]', dataNasc);
  await expect(scope.context.currentPage).toFill('input[id="usernameC"]', username);
  await expect(scope.context.currentPage).toFill('input[id="senha"]', senha);
  await expect(scope.context.currentPage).toFill('input[id="confirmSenhaUser"]', confirmSenhaUser);
});