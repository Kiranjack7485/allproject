const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I open the Home page$/, async()=>{
    await browser.url("https://www.flipkart.com/");
});

Then(/^Removing the pop-up$/, async() => {
    await browser.$("//button[@class='_2KpZ6l _2doB4z']").click();
});

Then(/^I open the login page$/, async() => {
    await browser.$("//a[@class='_1_3w1N']").click();
});

When(/^I login with (.+) and (.+)$/, async(username, password) => {
    await browser.$("//input[@class='_2IX_2- VJZDxU']").setValue(username);
    await browser.$("//input[@class='_2IX_2- _3mctLh VJZDxU']").setValue(password);
    await browser.$("//button[@class='_2KpZ6l _2HKlqd _3AWRsL']").click();

});

Then(/^I'm on the Productpage$/, async() => {
     expect (browser.$("//div[contains(text(),'Top Offers')]").isDisplayed());
});

