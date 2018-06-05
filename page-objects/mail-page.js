class MailPage
{
    constructor()
    {
        this.WriteMessageButton=element(by.xpath("//div[@role='button' and contains(text(),'НАПИСАТЬ')]"));
        this.Recipient=element(by.xpath("//tr[child::*//span[contains(text(),'Кому')]]//textarea[@aria-label='Кому']"));
        this.MessageTextBox=element(by.xpath("//tr[child::*//span[contains(text(),'Кому')]]//div[@role='textbox']"));
        this.SendButton=element(by.xpath("//div[contains(text(),'Отправить') and @aria-label]"));
        this.LookAtMessageButton=element(by.xpath("//span[contains(text(),'Просмотреть')]"));
        this.SentMessage=element(by.xpath("//div[@data-message-id]//div[@dir='ltr']"));
    }

    clickWriteMessage()
    {
        this.WriteMessageButton.click();
        return browser.wait(protractor.ExpectedConditions.visibilityOf(this.Recipient),10000,"Cant find recipient input");             
    }

    writeRecipient(recipient)
    {
        this.Recipient.sendKeys(recipient);
        return this.MessageTextBox.isPresent();
    }

    writeMessage(message)
    {
        this.MessageTextBox.sendKeys(message);  
        return this.SendButton.isPresent();      
    }    

    clickSendMessage()
    {
        this.SendButton.click();
        return browser.wait(protractor.ExpectedConditions.visibilityOf(this.LookAtMessageButton),10000,"Cant find look at message link");  
    }

    clickLookAtMessageLink()
    {
        this.LookAtMessageButton.click();
        return browser.wait(protractor.ExpectedConditions.visibilityOf(this.SentMessage),10000,"Cant find sent message");
    }
    lookAtSentMessage()
    {
        return this.SentMessage.getText();
    }
}

module.exports=new MailPage();