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
                cy.get("textarea[placeholder='Page title']").type("Nueva Pagina de Prueba");
                cy.get("p").invoke("text","Esto es una nueva descripción para la pagina");
                cy.get("button").contains("Publish").click();
                cy.get("button.gh-publish-setting-title").click();
                cy.get("label").contains("Set it live now").click();
                cy.get('button[data-test-button="continue"]').click();
                cy.get("button[data-test-button='confirm-publish']").click();
                cy.get('button[data-test-button="back-to-editor"]').click();
                cy.get('a[href="#/pages/"]').click();
            });
            it("Then: should see the created page", () => {
                cy.contains("Nueva Pagina de Prueba").should("exist");
            });
        });
    });
});
