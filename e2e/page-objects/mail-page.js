class MailPage
{
    constructor()
    {
        this.WriteMessageButton=element(by.xpath("//div[@role='button' and contains(text(),'НАПИСАТЬ')]"));
        this.Recipient=element(by.xpath("//tr[child::*//span[contains(text(),'Кому')]]//textarea[@aria-label='Кому']"));
        this.MessageTextBox=element(by.xpath("//tr[child::*//span[contains(text(),'Кому')]]//div[@role='textbox']"));
        this.SendButton=element(by.xpath("//div[contains(text(),'Отправить') and @aria-label]"));
    }

    ClickWriteMessage()
    {
        this.WriteMessageButton.click();
        return this.Recipient.isPresent();
    }

    WriteRecipient(recipient)
    {
        this.Recipient.sendKeys(recipient);
        return this.MessageTextBox.isPresent();
    }

    WriteMessage(message)
    {
        this.MessageTextBox.sendKeys(message);

    }    
}

module.exports=new MailPage();