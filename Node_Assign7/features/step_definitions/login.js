var {Given} = require('cucumber');
const {defineSupportCode} = require('cucumber');
const assert = require('assert');
const until = require("selenium-webdriver");
var {Then} = require('cucumber');
const xpath = require("selenium-webdriver").By.xpath;
const linkText = require("selenium-webdriver").By.linkText;
var {When} = require('cucumber');

defineSupportCode(function ({Given,When,Then}) {

    Given(/^I Navigate to opencart website$/,{timeout:1000},function (callback){
                this.driver.get("https://www.opencart.com");
                callback();
    });
	
    Given('Verify the title as {string}',{timeout:1000},function (string, callback){
                   this.driver.getTitle()
                 .then(function(title) {
                     assert.deepStrictEqual(string, title);
                 });
            callback();
    });
	
    When('Click on login link',{timeoutInMilliseconds:2000}, function(callback){
        this.driver.findElement({xpath:".//a[@class='btn btn-link navbar-btn']"}).click().then(callback);
    });
	
    When(/^User logs in using wrong "([^"]*)" or "([^"]*)"$/,{timeoutInMilliseconds:2000}, function (username,password,callback) {
            this.driver.findElement({xpath:".//input[@name='email']"}).sendKeys(username).then(callback);
            this.driver.findElement({xpath:".//input[@name='password']"}).sendKeys(password).then(callback);
            this.driver.findElement({xpath:".//button[text()='Login']"}).click().then(callback);
    });

   Then('Verify the login error message as {string}',{timeoutInMilliseconds: 30000}, function (string) {
        this.driver.findElement({xpath:".// div[@class='alert alert-danger']"})
           .getText().then(function (result) {
                console.log("Error Message is: "+result);
            return assert.assert.equal(result,string);
       });
	   
   When('click on close',{timeout:1000}, function(callback){
	this.driver.findElement({xpath:".//input[@name='close']"}).click().then(callback);
	});
    });
});
