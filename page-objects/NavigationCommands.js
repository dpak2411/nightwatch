/**
 * Created by admin on 5/21/2017.
 */
var navigationCommands = {
    validatePage: function() {
        return this.waitForElementVisible('body', 1000)
    },

    selecthostessPage: function(hostess)
    {
        return this.waitForElementVisible('body', 1000)
            .click('@selecthostesslink')
            .waitForElementPresent('@hostesstext',2000)
            .setValue('@hostesstext',hostess)
            .waitForElementPresent('@selectfromdropdown',5000)
            .click('@selectfromdropdown')
            .waitForElementPresent('@startshopping',3000)
            .click('@startshopping')
            .waitForElementPresent('@designername',3000)
          //  .verify.containsText('@designername',hostess)

    },

    shoppingaddtocart : function(){
        return this.waitForElementPresent('@shoplink',1000)
            .click('@shoplink')
            .click('@whatsnew')
            .waitForElementPresent('@charms',10000)
            .click('@charms')
            .waitForElementPresent('@shoppingitem',10000)
            .click('@shoppingitem')
            //.click('@color')
            .waitForElementPresent('@addtobag',10000)
            .click('@addtobag')

            .click('@bag')
            .waitForElementPresent('@shoppingbagtext',5000)
    },

    cartvalidateforredeemoffer :function(quantity){
        return this.waitForElementPresent('@shoppingbagtext',6000)
          //  .getText('@totalamount', function(result) {
            //    verify.value>'50'
            //   })
            .click('@editbutton')
            .waitForElementPresent('@quantity',6000)
            .setValue('@quantity',quantity)
            .waitForElementPresent('@updatebutton',3000)
            .click('@updatebutton')
        // .click('@redeemoffer')

    },

    redeemoffer :function(){
        return this.waitForElementPresent('@redeemoffer',2000)
            .click('@redeemoffer')
            .waitForElementPresent('@offeritem',10000)
            .click('@offeritem')
            .waitForElementPresent('@addtobag',10000)
            .click('@addtobag')
            .click('@bag')
            .waitForElementPresent('@shoppingbagtext',5000)
            .verify.containsText('@offertext','Exclusive Offer 50% Off')
    },

    nooffer :function(){
       return this.isVisible('@redeemoffer',function(result){
           if(result.value=='True')
           {
               assert(false);
           }else
           {
               assert(true);
           }
       })
    }
};




module.exports = {
    commands: [navigationCommands],
    url: function() {
        return this.api.launchUrl;
    },
    elements: {
        logo: {
            selector: 'html body header#header.navbar-wrapper div.container div.nav-middle div.container-fluid div.actions-wrapper a.logo span'
        },
        selecthostesslink: {
            selector: 'html body header#header.navbar-wrapper div.container div.nav-top div.container-fluid div.find-designer-or-hostess-region div div.find div.find-text a.find-hostess'
        },
        hostesstext: {
            //selector: 'html body.modal-open header#header.navbar-wrapper.profile-photo-present div.container div#generic-modal-container.modal.fade.in div.modal-dialog div.modal-content.miniModal div div#select-hostess-and-dsr.modal-body div.search-component.setup-hostess-and-dsr div div.top-20.bottom-10 div.search-box div div.has-default-input.has-icon-left.has-icon-right input.form-control.js-search-field'
            selector: 'input.form-control:nth-child(2)'

        },
        selectfromdropdown: {
            selector: '.name'
        },
        startshopping: {
            selector: '#start-shopping'
        },
        designername: {
            selector: '.find-designer-or-hostess-region > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1) > a:nth-child(1)'
        },

        shoplink: {
            selector: '#nav_shop'
        },

        whatsnew: {
            selector: '#whats_new'
        },

        keepers: {
            selector: 'div.hidden-xs:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)'
        },

        charms: {
            selector: 'div.hidden-xs:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)'
        },

        shoppingitem: {
            //selector: '#styles > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > figure:nth-child(1) > div:nth-child(1) > img:nth-child(1)'
            //selector:'#styles > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > a:nth-child(1) > figure:nth-child(1) > div:nth-child(1) > img:nth-child(1)'
            selector: '#styles > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > figure:nth-child(1) > figcaption:nth-child(2) > div:nth-child(1)'
        },

        color:{
          selector: '#style_id'
        },

        addtobag:{
            selector: '#view_cart'
        },

        bag:{
            selector: 'span.hide-on-mini:nth-child(3)'
        },

        shoppingbagtext: {
            selector:'.no-margin'
        },

        totalamount: {
            selector: '.top-5'
        },

        editbutton :{
            selector: '.js-edit'
        },

        quantity :{
            selector:'input.form-control:nth-child(2)'
        },

        updatebutton:{
            selector: 'button.btn-sm:nth-child(2)'
        },

        redeemoffer:{
            selector: '.view-cart'
        },

        offeritem:{
            selector:'#styles > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > figure:nth-child(1) > div:nth-child(1) > img:nth-child(1)'
        },

        offertext: {
            selector:'.promotion-text'
        }

    }
};