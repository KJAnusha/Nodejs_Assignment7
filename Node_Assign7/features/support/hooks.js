const {defineSupportCode} = require('cucumber');

defineSupportCode(function({After,Before}) {
    Before(function() {
        return this.driver.manage().window().maximize();
    });
    After(function() {
        return this.driver.quit();
    });
});