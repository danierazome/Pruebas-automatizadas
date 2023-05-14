import { loginPage } from "../pages/logInPage";
import PARAMETERS from "../../parameters";

beforeEach (() => {
    loginPage.goToLogIn();
    
});

// Seventh Functionality -> Forgotten password

describe("Import members with CSV file", () => {
 
    // First scenary -> Forgotten password without email
  
    it("Should not work forgot password button without email.", () => {
     loginPage.elements.forgotButton().click({force:true});
    });

    // Second scenary -> Forgotten password with email
  
    it("Should  work forgot password button.", () => {
        loginPage.elements.emailInput().type(PARAMETERS.USER_EMAIL);
        loginPage.elements.forgotButton().click({force:true});
    });    
  });