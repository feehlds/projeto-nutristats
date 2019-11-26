const { setWorldConstructor } = require('cucumber');
const puppeteer = require('puppeteer');
const scope = require('./support/scope');


const World = function(){
    scope.driver = puppeteer;
    scope.context = {};
    scope.host = "https://nutri-stats.herokuapp.com/#/";

    scope.map_of_pages = {
        'Novo Tópico': scope.host + '/topicos/create',
        'Tópicos': scope.host + '/topicos'
    }
};

setWorldConstructor(World);