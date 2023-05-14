import LoginPage from "../../../support/pageobjects/LoginPage";
import CreatePage from "../../../support/pageobjects/CreatePage";

describe("Create delete page on website", () => {
    context("Given: Access web site", () => {
        beforeEach(() => {
            LoginPage.visitLoginPage();
        });
        context("When: Go to Pages section and delete page. ", () => {
            const timestamp = Date.now();
            const pageTitle = `Nueva Pagina de Prueba ${timestamp}`;

            beforeEach(() => {
                LoginPage.fillEmailLogin();
                LoginPage.fillPasswordLogin();
                LoginPage.clickFormLogin();
                CreatePage.writeNewPage(pageTitle);
                CreatePage.confirmNewPage();
                cy.wait(3000);
                cy.get("a[href='#/pages/']").eq(0).click();
                cy.contains(pageTitle).click();
                cy.get('button[title="Settings"]').click();
                cy.contains(/Delete page/).click();
                cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view").click();
            });
            it("Then: should not be a page with the name 'Nueva Pagina de Prueba' ", () => {
                cy.contains(pageTitle).should("not.exist");
            });
        });
    });
});
