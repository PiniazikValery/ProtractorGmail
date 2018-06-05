let MailPage=require("../page-objects/mail-page")

class LoginPage
{
    constructor()
    {
        this.EmailInput=element(by.xpath("//input[@type='email']"));        
        this.Password=element(by.xpath("//input[@type='password']"));       
        this.NextButton=element(by.xpath("//span[contains(text(),'Next')]"));        
        this.DoneButton=element(by.xpath("//span[contains(text(),'Done')]"));
    }

    SendKyesIntoEmailInput(keys)
    {
        this.EmailInput.sendKeys(keys);      
        return this.NextButton.isPresent();                
    }

    ClickNextAfterEmail()
    {
        this.NextButton.click();   
        return browser.wait(protractor.ExpectedConditions.visibilityOf(this.Password),10000,"Cant find password input");     
    }        
    
    ClickNextAfterPassword()
    {
        this.NextButton.click();  
        return browser.wait(protractor.ExpectedConditions.visibilityOf(MailPage.WriteMessageButton),10000,"Cant find write message button");
    }

    ClickDoneButton()
    {
        this.DoneButton.click();
        return browser.wait(protractor.ExpectedConditions.visibilityOf(MailPage.WriteMessageButton),10000,"Cant find write message button");
    }
    
    SendKyesIntoPassword(keys)
    {      
        this.Password.sendKeys(keys);    
        return this.NextButton.isPresent();    
    }
}

module.exports=new LoginPage();
