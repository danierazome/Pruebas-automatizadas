import LoginPage from "../../../support/pageobjects/LoginPage";
describe("Create a ghost account scenery 4", () => {
  const baseURL = Cypress.env("baseURL");
  it("Visits Ghost Web application", () => {
    cy.viewport(1280, 720);
    cy.visit(`${baseURL}/ghost/#/setup`);
    cy.get("#blog-title").type("MyFirstBlog");
    cy.get("#name").type("Juan José Montenegro Pulido");
    cy.get("#email").type("correoDePrueba@gmail.com");
    cy.get("#password").type("@1234567890*");
    cy.wait(1500);
    cy.get("button[data-test-button='setup']").click();
    // After logingIn, we are going to log out the session
    cy.wait(10000);
    cy.visit(`${baseURL}/ghost/#/signout`)
    LoginPage.visitLoginPage();
    cy.wait(3000);

    LoginPage.fillEmailLogin();
    LoginPage.fillPasswordLogin();
    cy.wait(3000);
    cy.get("button[data-test-button='sign-in']").click();
  });
});
