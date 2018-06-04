let userAtStartPage = require('../e2e/page-objects/start-page');
let userAtLoginPage = require('../e2e/Steps/login-page-steps');
let userAtMailPage = require('../e2e/page-objects/mail-page');

describe('Test SignIn to Gmail ', function () {
    it('should log in to gmail', function () {
        userAtStartPage.ClickSignIn().then(() =>
            userAtLoginPage.LogIn("valery.piniazik123@gmail.com", "Dfkthfgbyzpbr1").then(() =>
                userAtMailPage.ClickWriteMessage()
            )
        )
    });
});