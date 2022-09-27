import { Given, When, Then } from '@wdio/cucumber-framework';
import { openHomePage } from "../pageobjects/page";
import { removePopup } from '../pageobjects/popUp';
import { login } from '../pageobjects/loginpage';
import { objectDisplay } from '../pageobjects/securepage';

Given(/^I open the Home page$/, async()=>{
    await openHomePage();
});

Then(/^Removing the pop-up$/, async() => {
    await removePopup();
});

Then(/^I click the login button$/, async() => {
    await $("//a[@class='_1_3w1N']").click();
});

When(/^I login with (.+) and (.+)$/, async(username,password) => {
    await login();

});

Then(/^I'm on the Productpage$/, () => {
     objectDisplay();
});

