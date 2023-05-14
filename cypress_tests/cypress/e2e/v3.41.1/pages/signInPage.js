const ghostUrl = Cypress.env("ghostV3");

class SignInPage {
  elements = {
    blogTitleInput: () => cy.get("input[name='blog-title']"),
    nameInput: () => cy.get("input[name='name']"),
    emailInput: () => cy.get("input[name='email']"),
    passwordInput: () => cy.get("input[name='password']"),
    createAccountButton: () =>
      cy.get(
        "button.gh-btn.gh-btn-green.gh-btn-lg.gh-btn-block.gh-btn-icon.ember-view"
      ),
    loginButton: () => cy.get("button.login"),
    inputErrors: () => cy.get("p.response"),
    mainError: () => cy.get("p.main-error"),
    skipNormalFlowButton: () => cy.get("button.gh-flow-skip"),
  };

  createAccount(blogTitle, name, email, password) {
    const signupUrl = `${ghostUrl}/ghost/#/setup/two`;

    cy.visit(signupUrl);
    this.elements.blogTitleInput().type(blogTitle);
    this.elements.nameInput().type(name);
    this.elements.emailInput().type(email);
    this.elements.passwordInput().type(password);
    this.elements.createAccountButton().click();
  }  
}

export const signInPage = new SignInPage();
