/**
 * Created by admin on 5/19/2017.
 */


module.exports = {
    'Step 1: Launch the URL' : function (browser) {
        browser
            .windowMaximize()
            .url('https://www.keepcollective.com/')
            .waitForElementVisible('body', 1000)
            .assert.containsText('html body header#header.navbar-wrapper div.container div.nav-middle div.container-fluid div.actions-wrapper a.logo span', 'KEEP Collective')
    },
    'Step 2 : Select a hostess' : function (browser) {
        //noinspection JSUnresolvedFunction
        browser
            .click("html body header#header.navbar-wrapper div.container div.nav-top div.container-fluid div.find-designer-or-hostess-region div div.find div.find-text a.find-hostess")
            .pause(1000)
            .useXpath()
            .assert.containsText('//h5[@id=\'myModalLabel\']','FIND YOUR HOSTESS')
            .sendKeys('//input[@class=\'form-control js-search-field\']','Allison Kellman')
           // .waitForElementPresent("//p[contains(.,'Allison Kellman')]",1000)
            .pause(1000)
            .waitForElementVisible('//p[contains(.,\'Allison Kellman\')]',3000)
            .click("//p[contains(.,'Allison Kellman')]")
            .assert.containsText('//h4[@class=\'bottom-10\']','ALLISON KELLMAN')
            .pause(200)
            .click("//button[@id='start-shopping']")

    },
    'Step 3 : Start Shopping' : function (browser) {
        //noinspection JSUnresolvedFunction
        browser
            .useXpath()
            .pause(1000)
            .click("//span[@class='hidden-xs hidden-sm']")
            .pause(5000)
            .click("//a[@id='whats_new']")
            .waitForElementPresent('//p[contains(.,\'Shop by type\')]',5000)
           // .useCss()
            .pause(5000)
            .click('//img[@src=\'https://assets.keepcollective.com/catalog_service/system/images/style/thumb_med/c9e7f403ed30d85569a33affde400d2b9d97299a.jpg?1491226816\']')
            .pause(5000)
            .click('//button[@id=\'view_cart\']')
            .pause(2000)
            .click('//span[contains(.,\' Bag\')]')
            .pause(2000)
            .waitForElementPresent('//a[@class=\'js-edit edit-remove-link\']',5000)
            .click('//a[@class=\'js-edit edit-remove-link\']')
            .pause(5000)
            .sendKeys('//input[@class=\'form-control bh-only-number bh-select-on-focus qty\']',3)
            .click('//button[contains(.,\'Update\')]')
            .pause(1000)
            .assert.containsText('//p[contains(.,\'You qualify for 50% off Exclusive Items! Redeem Offer\')]','You qualify for 50% off Exclusive Items! Redeem Offer')
            .end();


    },


};
