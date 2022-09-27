


class LoginPage {

   
    get inputUsername () {
        return $("//input[@class='_2IX_2- VJZDxU']");
    }

    get inputPassword () {
        return $("//input[@class='_2IX_2- _3mctLh VJZDxU']");
    }

    get btnSubmit () {
        return $("//button[@class='_2KpZ6l _2HKlqd _3AWRsL']");
    }

    async login (username,password) {
        await this.inputUsername.setValue("7022827267");
        await this.inputPassword.setValue("Kiranjack@7485");
        await this.btnSubmit.click();
    }

    // openHomePage () {
    //     return super.openHomePage('login');
    // }
}

module.exports = new LoginPage
