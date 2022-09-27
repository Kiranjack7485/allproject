// const { assert } = require('chai');

const expect = require('chai').expect

class SecurePage {

    async orderPlaced () {

        const txt1 = await $(".complete-header").getText();
        console.log("The text is : ",  txt1);
         expect (txt1).to.equals("THANK YOU FOR YOUR ORDER");

         const txt2 = await $(".title").getText();
        console.log("The text is : ",  txt2);
         expect (txt2).to.equals("CHECKOUT: COMPLETE!");

         const txt3 = await $(".complete-text").getText();
        console.log("The text is : ",  txt3);
         expect (txt3).to.equals("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
    }
}

module.exports = new SecurePage;