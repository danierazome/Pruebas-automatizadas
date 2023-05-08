import LoginPage from "../../../support/pageobjects/LoginPage";

describe("Create delete page on website", () => {
    context("Given: Access web site", () => {
        beforeEach(() => {
            LoginPage.visitLoginPage();
        });
        context("When: Go to Pages section and delete page. ", () => {
            beforeEach(() => {
                LoginPage.fillEmailLogin();
                LoginPage.fillPasswordLogin();
                LoginPage.clickFormLogin();
                cy.get("a[href='#/pages/']").click();
                cy.contains("Nueva Pagina de Prueba").click();
                cy.get('button[title="Settings"]').click();
                cy.contains(/Delete page/).click();
                cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view").click();
                // cy.get("a[href='#/editor/page/']").click();
                // cy.get("textarea[placeholder='Page title']").type("Nueva Pagina de Prueba");
                // cy.get("p").invoke("text","Esto es una nueva descripción para la pagina");
                // cy.get("button").contains("Publish").click();
                // cy.get("button.gh-publish-setting-title").click();
                // cy.get("label").contains("Set it live now").click();
                // cy.get("button[data-test-button='confirm-publish']").click();
                // cy.get('button[data-test-button="back-to-editor"]').click();
                // cy.get('a[href="#/pages/"]').click();
            });
            it("Then: should not be a page with the name 'New Test Page' ", () => {
                cy.contains("Nueva Pagina de Prueba").should("not.exist");
            });
        });
    });
});
