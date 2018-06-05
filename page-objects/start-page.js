let LoginPage=require("../page-objects/login-page")

class StartPage
{
    constructor()
    {
        console.log('Open Gmail');
        browser.get(browser.baseUrl);
        this.SignInButton=element(by.xpath("//a[contains(text(),'Sign In')]"));        
    }

     ClickSignIn()
    {
        this.SignInButton.click();  
        return LoginPage.EmailInput.isPresent();         
    }
}

module.exports=new StartPage();