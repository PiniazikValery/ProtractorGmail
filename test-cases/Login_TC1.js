let userAtStartPage = require('../page-objects/start-page');
let userAtLoginPage = require('../steps/login-page-steps');
let userAtMailPage = require('../steps/mail-page-steps');

describe('Test SignIn to Gmail ', function () {
    it('should log in to gmail', function () {
        userAtStartPage.clickSignIn().then(() =>
            userAtLoginPage.logIn("valery.piniazik123@gmail.com", "Dfkthfgbyzpbr1").then(() =>
                userAtMailPage.writeMessageAndLookAtThem("arclonerholdon@gmail.com", "Hello this is message from protractor js").then((sentMessage) =>
                    expect(sentMessage).toEqual("Hello this is message from protractor js")
                )
            )
        )
    });
});