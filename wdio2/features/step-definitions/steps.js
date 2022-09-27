const { Given, When, Then } = require('@wdio/cucumber-framework');
const CheckoutOverview = require('../pageobjects/checkoutOverview');
const InfoPage = require('../pageobjects/infoPage');

const LoginPage = require('../pageobjects/loginPage');
const OrderPage = require('../pageobjects/orderPage');
const ProductPage = require('../pageobjects/productPage');
const Page = require('../pageobjects/page');


Given(/^I'm on the homepage$/, async () => {
    await Page.openPage();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should add the 2nd least expensive product from the cart$/, async() => {
    await ProductPage()
});

Then (/^I should validate the User Info using (\w+), (\w+) and (.+)$/, async() => {
    await InfoPage.continue(firstname, lastname, zipcode)
});

Then(/^I confirm the order$/, async () => {
    await CheckoutOverview.checkout()
});

Then(/^Order should be placed successfully$/, async () => {
    await OrderPage()
})
