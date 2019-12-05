const { After, AfterAll, Before, BeforeAll } = require('cucumber');
const scope = require('./support/scope');
const app = require("../index");
Before(async () =>{
  
});

After(async () => {

    if(scope.browser && scope.context.currentPage){
       await scope.context.currentPage.close();
       scope.context.currentPage = null;

    }
});

AfterAll(async () => {
    app.server.close();
   
});