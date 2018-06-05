let LoginPage = require("../page-objects/login-page")

class LoginPageSteps {
    LogIn(email, password) {
        return LoginPage.SendKyesIntoEmailInput(email).then(() =>
            LoginPage.ClickNextAfterEmail().then(() =>
                LoginPage.SendKyesIntoPassword(password).then(() =>
                    LoginPage.ClickNextAfterPassword()                
                )
            )
        )
    }
}

module.exports = new LoginPageSteps();