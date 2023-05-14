const ghostUrl = Cypress.env("baseURL");

class LogInPage {
    elements = {
        emailInput: () => cy.get("input[name='identification']"),
        passwordInput: () => cy.get("input[name='password']"),
        loginButton: () => cy.get("button.login"),
      }
    
      login(email, password) {
        cy.visit(`${ghostUrl}/ghost/#/signin`);
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.loginButton().click();
      }
    }
    
    export const loginPage = new LogInPage();