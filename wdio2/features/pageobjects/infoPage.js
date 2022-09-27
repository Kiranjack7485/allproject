

class InfoPage {
    
    get inputFirstname () {
        return $("//input[@id='first-name']");
    }

    get inputLastname () {
        return $("//input[@id='last-name']");
    }

    get inputZipcode () {
        return $("//input[@id='postal-code']");
    }

    get btnSubmit () {
        return $("//input[@id='continue']");
    }

    async continue (firstname, lastname, zipcode) {
        await this.inputFirstname.setValue("Tom");
        await this.inputLastname.setValue("Cruise");
        await this.inputZipcode.setValue("560040");
        await this.btnSubmit.click();
    }

    open () {
        return super.open('continue');
    }
}

module.exports = new InfoPage();
