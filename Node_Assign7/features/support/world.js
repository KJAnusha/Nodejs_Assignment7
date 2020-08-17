const {defineSupportCode} = require('cucumber');
const chrome = require('chromedriver');
const seleniumwebdriver = require('selenium-webdriver');
const {expect} = require('chai');

function  CustomWorld() {
    this.driver = new seleniumwebdriver.Builder()
        .forBrowser( 'chrome').build();
}

defineSupportCode (function({setDefaultTimeout, setWorldConstructor}) {
    setWorldConstructor(CustomWorld);
    setDefaultTimeout(60*1000);
});
