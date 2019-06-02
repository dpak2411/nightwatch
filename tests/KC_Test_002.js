/**
 * Created by admin on 5/21/2017.
 */
/** Scenario : To check if the offer appears if Design selection is selected and items in shopping cart above $50*/

module.exports = {
    'Keep Collective Page Initial Render': function (browser) {
        var login = browser.page.NavigationCommands();

        login.navigate()
            .validatePage()
        browser.windowMaximize()
    },

    'Navigate to Designer Page': function(browser)
    {
        var hostess=browser.page.NavigationCommands();
        hostess.selecthostessPage('Allison Kellman')

    },

    'Shop for an item' :function(browser)
    {
        var items= browser.page.NavigationCommands();
        items.shoppingaddtocart()

    },

    'Check cart for offer' : function (browser)
    {
        var cart= browser.page.NavigationCommands();
        cart.cartvalidateforredeemoffer(4)

    },

    'Check for the offer item' : function (browser)
    {
        var offeritem= browser.page.NavigationCommands();
        offeritem.redeemoffer()
        browser.end();
    }
};