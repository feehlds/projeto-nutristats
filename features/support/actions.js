const scope = require('./scope');
const assert = require('assert');

let headless = true;
let slowMo = 200;

const visitHome = async () => {
    scope.browser = await scope.driver.launch({headless, slowMo, args: ['--no-sandbox']});
    scope.context.currentPage = await scope.browser.newPage();
  //  scope.context.currentPage.setViewport({ width: 1280, height: 1024});

    const visit = await scope.context.currentPage.goto(scope.host, {
        waitUntil: 'networkidle2',
    });
   scope.context.currentPage.waitFor(1000);

    return visit;
};

module.exports = { visitHome };