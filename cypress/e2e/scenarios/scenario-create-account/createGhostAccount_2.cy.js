describe("Create a ghost account scenery 2", () => {
  it("Visits Ghost Web application", () => {
    cy.viewport(1280, 720);
    cy.visit("http://localhost:2368/ghost/#/setup/two");
    cy.get("#blog-title").type("MyFirstBlog");
    cy.get("#name").type("Juan José Montenegro Pulido");
    cy.get("#email").type("correoDePrueba.com");
    cy.get("#password").type("@Pnqeeec0123*");
    cy.wait(2000);
    cy.get(".gh-btn-icon-right").click();
  });
});
