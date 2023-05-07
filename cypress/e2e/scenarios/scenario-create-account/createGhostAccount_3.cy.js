describe("Create a ghost account scenery 3", () => {
  const baseURL = Cypress.env("baseURL");
  it("Visits Ghost Web application", () => {
    cy.viewport(1280, 720);
    cy.visit(`${baseURL}/ghost/#/setup/two`);
    cy.get("#blog-title").type("MyFirstBlog");
    cy.get("#name").type("Juan José Montenegro Pulido");
    cy.get("#email").type("correoDePrueba@gmail.com");
    cy.get("#password").type("123");
    cy.wait(2000);
    cy.get(".gh-btn-icon-right").click();
  });
});
