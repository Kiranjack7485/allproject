
class Page {

    async openHomePage () {
     return await browser.url(`https://www.flipkart.com/`);
    }
}

module.exports= new Page();