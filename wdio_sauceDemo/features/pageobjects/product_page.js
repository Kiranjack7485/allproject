
const Page = require('../pageobjects/page').default;

class ProductPage {

    get dropDown () {
        return  $('.product_sort_container');
    }

    get productSelect () {
        return $('#add-to-cart-sauce-labs-bike-light');
    }

    get goToCart () {
        return $('.shopping_cart_link');
    }

    get checkOutClick () {
        return $('#checkout');
    }

    async productCheck () {
        await this.dropDown.selectByVisibleText('Price (low to high)');
        await this.productSelect.click();
        await this.goToCart.click();
        await this.checkOutClick.click();
    }


}

module.exports = new ProductPage;