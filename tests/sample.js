/**
 * Created by admin on 5/18/2017.
 */

module.exports = {
    'Demo test Google' : function (browser) {
        browser
            .windowMaximize()
            .url('http://www.google.com')
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible('button[name=btnG]', 1000)
            .click('button[name=btnG]')
            .pause(1000)
            .assert.containsText('#main', 'Night Watch')
            .end();
    }
};
