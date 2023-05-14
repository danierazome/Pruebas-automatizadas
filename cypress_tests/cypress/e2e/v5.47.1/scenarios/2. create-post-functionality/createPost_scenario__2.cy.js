import LoginPage from "../../../../support/pageobjects/LoginPage";

describe("Create a post scenario 2 ", () => {
  const baseURL = Cypress.env("baseURL");
  it("Visits Ghost Web application", () => {
    cy.viewport(1280, 720);
    // LogIn page
    LoginPage.visitLoginPage();
    // LogingIn
    LoginPage.fillEmailLogin();
    LoginPage.fillPasswordLogin();
    LoginPage.clickFormLogin();

    cy.wait(1000);
    cy.visit(`${baseURL}/ghost/#/site`);
    // expand Posts Section
    cy.wait(2000);
    cy.get("#ember28").click();
    cy.wait(2000);
    cy.get(`a[href="#/editor/post/"]`).visit(`${baseURL}/ghost/#/editor/post/`);
    cy.wait(2000);
    cy.get("textarea[tabindex=1]").type("Segundo Post de prueba con cypress");
    cy.wait(1000);
    cy.get("div[data-kg=editor]")
      .click()
      .type(
        "Esta es una prueba de publicación del post incluyendo una imagen."
      );
    
    cy.get("textarea[data-test-editor-title-input]").click()
    cy.get("button").contains("span", "Add feature image").click();
    cy.wait(1000);
    cy.get("input[type=file]")
      .invoke("show")
      .selectFile("cypress/fixtures/logo.png", { force: true });
    cy.wait(1000);
    cy.contains("span", "Publish").click();
    cy.wait(1000);
    cy.get("button[data-test-button='continue']").click();
    cy.wait(1000);
    cy.get("button[data-test-button='confirm-publish']").click();
    cy.wait(1000);
    cy.get("a[data-test-complete-bookmark]").click();   
    cy.wait(1000);
  });
});
