let MailPage = require('../page-objects/mail-page');

class MailPageSteps {
    WriteMessage(recipient, message) {
        return MailPage.ClickWriteMessage().then(() =>
            MailPage.WriteRecipient("arclonerholdon@gmail.com")
        )
    }
}