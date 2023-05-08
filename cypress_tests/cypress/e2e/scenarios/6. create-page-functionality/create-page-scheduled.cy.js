import LoginPage from "../../../support/pageobjects/LoginPage";

describe("Create new page on website", () => {
    context("Given: Access web site", () => {
        beforeEach(() => {
            LoginPage.visitLoginPage();
        });
        context("When: Go to Pages section and create a new page. ", () => {
            beforeEach(() => {
                LoginPage.fillEmailLogin();
                LoginPage.fillPasswordLogin();
                LoginPage.clickFormLogin();
                cy.get("a[href='#/pages/']").click();
                cy.get("a[href='#/editor/page/']").click();
                cy.get("textarea[placeholder='Page title']").type("Nueva Pagina de Prueba Programada");
                cy.get("p").invoke("text","Esto es una nueva descripción para la pagina programada");
                cy.get("button").contains("Publish").click();
                cy.get("button.gh-publish-setting-title").click();
                cy.get("label").contains("Schedule for later").click();
                cy.get('button[data-test-button="continue"]').click();
                cy.get("button[data-test-button='confirm-publish']").click();
                cy.get('button[data-test-button="close-publish-flow"]').click();
                cy.get('a[href="#/pages/"]').click();
            });
            it("Then: should see the created page", () => {
                cy.contains("Nueva Pagina de Prueba Programada").eq(0).should("exist");
            });
        });
    });
});
