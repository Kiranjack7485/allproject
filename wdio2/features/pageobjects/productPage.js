

class ProductPage {
    
    get leastProduct () {
        return $("//select[@class='product_sort_container']").selectByIndex(2);
    }
    get addToCart () {
        return $("//button[@id='add-to-cart-sauce-labs-bike-light']").click();
    }
    get goToCart () {
        return $("//a[@class='shopping_cart_link']").click();
    }
    get cartConfirm () {
        return $("//button[@id='checkout']").click();
    }
}

module.exports = new ProductPage();
