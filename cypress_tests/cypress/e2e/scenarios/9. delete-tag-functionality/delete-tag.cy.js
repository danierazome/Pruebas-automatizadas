import LoginPage from "../../../support/pageobjects/LoginPage";

describe("Create delete tag on website", () => {
    context("Given: Access web site", () => {
        beforeEach(() => {
            LoginPage.visitLoginPage();
        });
        context("When: Go to Tags section and delete tag. ", () => {
            beforeEach(() => {
                LoginPage.fillEmailLogin();
                LoginPage.fillPasswordLogin();
                LoginPage.clickFormLogin();
                cy.get("a[href='#/tags/']").click();
                cy.contains("Nuevo Tag de Prueba").click();
                cy.contains(/Delete tag/).click();
                cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view").click();
            });
            it("Then: should not be a tag with the name 'Nuevo Tag de Prueba' ", () => {
                cy.contains("Nuevo Tag de Prueba").should("not.exist");
            });
        });
    });
});
