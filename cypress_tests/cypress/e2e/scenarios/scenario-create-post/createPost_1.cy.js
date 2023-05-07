describe("Create a ghost post scenary 1", () => {
  it("Visits Ghost Web application", () => {
    cy.viewport(1280, 720);
    // LogIn page
    cy.visit("${baseURL}/ghost/#/signin");
    // LogingIn
    cy.get("#ember8").type("correoDePrueba@gmail.com", { force: true });
    cy.get("#ember10").type("@1234567890*", { force: true });
    cy.wait(1000);
    cy.get("#ember12").click();
    cy.visit("${baseURL}/ghost/#/site");
    // expand Posts Section
    cy.wait(2000);
    cy.get("#ember28").click();
    cy.wait(2000);
    cy.get('a[href="#/editor/post/"]').visit("${baseURL}/ghost/#/editor/post/");
    cy.wait(2000);
    cy.get("textarea[tabindex=1]").type("Primer Post de prueba con cypress");
    cy.wait(1000);
    cy.get("div[data-kg=editor]")
      .click()
      .type("Esta es una prueba de publicación del post con solo texto.");
    cy.contains("span", "Publish").click();
    cy.wait(1000);
    cy.get("button").contains("span", "Publish").click();
    cy.wait(1000);
    cy.get('a[href="#/posts/"]').visit("${baseURL}/ghost/#/posts");
    cy.wait(1000);
  });
});
