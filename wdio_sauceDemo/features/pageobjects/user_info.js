

class UserInfo {

    get inputFirstName () {
        return $('#first-name');
    }

    get inputLastName () {
        return $('#last-name');
    }

    get inputZipCode () {
        return $('#postal-code');
    }

    get inputContinue () {
        return $('#continue');
    }

    async continuePage (firstname,lastname,zipcode) {
        await this.inputFirstName.setValue("Tom");
        await this.inputLastName.setValue("Cruise");
        await this.inputZipCode.setValue("560040");
        await this.inputContinue.click();
    }

}

module.exports = new UserInfo;