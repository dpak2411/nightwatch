/**
 * Created by admin on 5/22/2017.
 */
/** Tests to check if the offer appears if there is no design session */



module.exports = {
    'Keep Collective Page Initial Render': function (browser) {
        var login = browser.page.NavigationCommands();

        login.navigate()
            .validatePage()
        browser.windowMaximize()
    },


    'Shop for an item' :function(browser)
    {
        var items= browser.page.NavigationCommands();
        items.shoppingaddtocart()

    },

    'Check cart for offer' : function (browser)
    {
        var cart= browser.page.NavigationCommands();
        cart.cartvalidateforredeemoffer(1)


    },

    'Check for the offer item' : function (browser)
    {
        var offeritem= browser.page.NavigationCommands();
        offeritem.nooffer()
        browser.end();
    }
};