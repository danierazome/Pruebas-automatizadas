describe("Create a ghost account scenery 4", () => {
  it("Visits Ghost Web application", () => {
    const baseURL = Cypress.env("baseURL");
    cy.viewport(1280, 720);
    cy.visit("${/ghost/#/setup/two");
    cy.get("#blog-title").type("MyFirstBlog");
    cy.get("#name").type("Juan José Montenegro Pulido");
    cy.get("#email").type("correoDePrueba@gmail.com");
    cy.get("#password").type("@Pnqeeec0123*");
    cy.wait(1500);
    cy.get(".gh-btn-icon-right").click();
    cy.wait(5000);
    cy.get(".gh-flow-skip").click();
    // After logingIn, we are going to log out the session
    cy.wait(3000);
    cy.visit(`${baseURL}/ghost/#/signout`);
    cy.get("#ember8").type("correoDePrueba@gmail.com");
    cy.get("#ember10").type("@Pnqeeec0123*");
    cy.wait(2000);
    cy.get("#ember12").click();
  });
});
