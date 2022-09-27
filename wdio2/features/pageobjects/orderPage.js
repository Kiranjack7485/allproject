

class OrderPage {
    get checkoutComplete () {
        console.log($("//span[@class='title']").getText());
    }
}

module.exports = new OrderPage();