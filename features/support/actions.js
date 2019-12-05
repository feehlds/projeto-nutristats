const scope = require('../support/scope');
const assert = require('assert');

let headless = false;
let slowMo = 100;

const visitHome = async () => {
    scope.browser = await scope.driver.launch({headless, slowMo});
    scope.context.currentPage = await scope.browser.newPage();
    scope.context.currentPage.setViewport({ width: 1280, height: 1024});

    const visit = await scope.context.currentPage.goto(scope.host, {
        waitUntil: 'networkidle0'
    });
    scope.context.currentPage.waitFor(1000);

    return visit;
};

module.exports = { visitHome };