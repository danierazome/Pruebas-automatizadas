import LoginPage from "../../../support/pageobjects/LoginPage";

describe("Create new tag on website", () => {
    context("Given: Access web site", () => {
        beforeEach(() => {
            LoginPage.visitLoginPage();
        });
        context("When: Go to Tags section and create a new tag. ", () => {
            beforeEach(() => {
                LoginPage.fillEmailLogin();
                LoginPage.fillPasswordLogin();
                LoginPage.clickFormLogin();
                cy.get("a[href='#/tags/']").click();
                cy.get("a[href='#/tags/new/']").click();
                cy.get("input[data-test-input='tag-name']").type("Nuevo Tag de Prueba");
                cy.get("input[data-test-input='accentColor']").type("123123");
                cy.get('input[data-test-input="tag-slug"]').type("new-tag");
                cy.get('textarea[data-test-input="tag-description"]').type("Esto es un tag de prueba con una descripcion corta");
                cy.get("button").contains(/Save/).click();
                cy.get("a[href='#/tags/']").eq(0).click();
            });
            it("Then: should see the created page", () => {
                cy.contains("Nuevo Tag de Prueba").eq(0).should("exist");
            });
        });
    });
});
