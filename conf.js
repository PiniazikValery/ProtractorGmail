exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  
    specs: [
    'unit/Login_TC1.js'
    ],
      
    baseUrl: 'https://www.google.com/gmail/about/#',
  
    allScriptsTimeout: 30000,
  
    onPrepare: function () {
      browser.ignoreSynchronization=true;         
    }
    };