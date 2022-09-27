
const expect = require('chai').expect


class SecurePage {
  
     async objectDisplay () {

        const flipText = $("//a[@class='_3-PJz-']").getText();
        console.log("Text is -> ", await flipText);
        expect (await flipText).to.equal("Become a Seller");
   



    }
}

module.exports = new SecurePage();
