

class LoginPage {
    
    get inputUsername () {
        return $("//input[@id='user-name']");
    }

    get inputPassword () {
        return $("//input[@id='password']");
    }

    get btnSubmit () {
        return $("//input[@id='login-button']");
    }

    async login (username, password) {
        await this.inputUsername.setValue("standard_user");
        await this.inputPassword.setValue("secret_sauce");
        await this.btnSubmit.click();
    }

    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
