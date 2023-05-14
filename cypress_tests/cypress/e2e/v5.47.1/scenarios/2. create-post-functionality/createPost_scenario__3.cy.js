import LoginPage from "../../../support/pageobjects/LoginPage";
describe("Create a post third scenario", () => {
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
    cy.get(`a[href="#/editor/post/"]`).visit(`${baseURL}/ghost/#/editor/post/`);
    cy.wait(2000);
    cy.get("textarea[tabindex=1]").type("Tercer Post de prueba con cypress");
    cy.wait(1000);
    cy.get("div[data-kg=editor]")
      .click()
      .type(
        "Esta es una prueba de publicación del post incluyendo una imagen del unsplash."
      );

    cy.get("textarea[data-test-editor-title-input]").click();
    cy.wait(1000);
    cy.get("svg[fill='currentColor']").click();
    cy.get("a[class=gh-unsplash-button]").first().click();
    cy.wait(1000);
    cy.get("button[data-test-button='publish-flow']").click();
    cy.wait(1000);
    cy.get("button[data-test-button='continue']").click();
    cy.wait(1000);
    cy.get("button[data-test-button='confirm-publish']").click();
    cy.wait(1000);
    cy.visit(`${baseURL}/ghost/#/site`);
  });
});
