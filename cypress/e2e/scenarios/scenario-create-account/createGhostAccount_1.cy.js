describe("Create a ghost account scenery 1", () => {
  it("Visits Ghost Web application", () => {
    cy.viewport(1280, 720);
    cy.visit("http://localhost:2368/ghost/#/setup/two");
    cy.wait(5000);
    cy.get(".gh-btn-icon-right").click();
  });
});
