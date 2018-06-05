let MailPage = require('../page-objects/mail-page');

class MailPageSteps {
    WriteMessageAndLookAtThem(recipient, message) {
        return MailPage.ClickWriteMessage().then(() =>
            MailPage.WriteRecipient("arclonerholdon@gmail.com").then(() =>
                MailPage.WriteMessage(message).then(() =>
                    MailPage.ClickSendMessage().then(() =>
                        MailPage.ClickLookAtMessageLink().then(() =>
                            MailPage.LookAtSentMessage()
                        )
                    )
                )
            )
        )
    }
}
module.exports = new MailPageSteps();