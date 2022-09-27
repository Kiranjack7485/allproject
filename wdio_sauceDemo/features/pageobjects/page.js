
class Page {
    
    async openHomePage() {
    return await browser.url(`https://www.saucedemo.com/`);
    }
}

module.exports = new Page;