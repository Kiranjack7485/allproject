

class CheckoutOverview extends Page {
    get checkout () {
        return $("//button[@id='finish']").click();
    }
}

module.exports = new CheckoutOverview();