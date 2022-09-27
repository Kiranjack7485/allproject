const { Given, When, Then } = require ('@wdio/cucumber-framework');
const Page = require ('../pageobjects/page');
const LoginPage = require ('../pageobjects/loginPage');
const ProductPage = require ('../pageobjects/product_page');
const UserInfo = require ('../pageobjects/user_info');
const SecurePage = require ('../pageobjects/secure_page');


Given(/^I am on the login page$/, async () => {
    await Page.openHomePage();
})

When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await LoginPage.login();
})

Then(/^Adding the second least expensive product to the cart$/, async () => {
    await ProductPage.productCheck();
})

Then(/^Entering the user information (.+), (.+) and (.+)$/, async (firstname, lastname, zipcode) => {
    await UserInfo.continuePage();
})

Then(/^I proceed for the checkout$/, async () => {
    await $("//*[@id='finish']").click();
})

Then(/^Order should be placed successfully$/, async () => {
    await SecurePage.orderPlaced();
})