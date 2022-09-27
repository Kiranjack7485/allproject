
class Page {
    
    async openPage () {
        return await browser.url(`https://www.saucedemo.com/`);
    }
}

module.exports = new Page();