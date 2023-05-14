import LoginPage from "../../../support/pageobjects/LoginPage";

describe("Create a ghost post scenary 1", () => {
  const baseURL = Cypress.env("baseURL");
  it("Visits Ghost Web application", () => {
    cy.viewport(1280, 720);
    // LogIn page
    LoginPage.visitLoginPage();
    // LogingIn
    LoginPage.fillEmailLogin();
    LoginPage.fillPasswordLogin();
    LoginPage.clickFormLogin();
    cy.visit(`${baseURL}/ghost/#/site`);
    // expand Posts Section
    cy.wait(2000);
    cy.get("#ember28").click();
    cy.wait(2000);
    cy.get(`a[href="#/editor/post/"]`).visit(`${baseURL}/ghost/#/editor/post/`);
    cy.wait(2000);
    cy.get("textarea[tabindex=1]").type("Primer Post de prueba con cypress");
    cy.wait(1000);
    cy.get("div[data-kg=editor]")
      .click()
      .type("Esta es una prueba de publicación del post con solo texto.");
    cy.get("button[data-test-button='publish-preview']").click();
    cy.wait(6000);
    cy.get("button").contains("Publish").click({ force: true }); 
    cy.get("button[data-test-button='continue']").click();
    cy.get("button[data-test-button='confirm-publish']").click();
    cy.get("a[data-test-complete-bookmark]").click();   
  });
});
