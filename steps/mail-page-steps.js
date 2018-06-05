let MailPage = require('../page-objects/mail-page');

class MailPageSteps {
    writeMessageAndLookAtThem(recipient, message) {
        return MailPage.clickWriteMessage().then(() =>
            MailPage.writeRecipient("arclonerholdon@gmail.com").then(() =>
                MailPage.writeMessage(message).then(() =>
                    MailPage.clickSendMessage().then(() =>
                        MailPage.clickLookAtMessageLink().then(() =>
                            MailPage.lookAtSentMessage()
                        )
                    )
                )
            )
        )
    }
}
module.exports = new MailPageSteps();