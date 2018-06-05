let LoginPage = require("../page-objects/login-page")

class LoginPageSteps {
    logIn(email, password) {
        return LoginPage.sendKyesIntoEmailInput(email).then(() =>
            LoginPage.clickNextAfterEmail().then(() =>
                LoginPage.sendKyesIntoPassword(password).then(() =>
                    LoginPage.clickNextAfterPassword()                
                )
            )
        )
    }
}

module.exports = new LoginPageSteps();