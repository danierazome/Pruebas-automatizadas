import LoginPage from "../../../support/pageobjects/LoginPage";
import CreateTag from "../../../support/pageobjects/CreateTag";

describe("Create delete tag on website", () => {
    context("Given: Access web site", () => {
        beforeEach(() => {
            LoginPage.visitLoginPage();
        });
        context("When: Go to Tags section and delete tag. ", () => {
            const timestamp = Date.now();
            const tagName = `Tag ${timestamp}`;

            beforeEach(() => {
                LoginPage.fillEmailLogin();
                LoginPage.fillPasswordLogin();
                LoginPage.clickFormLogin();
                CreateTag.newTag(tagName);
                cy.wait(3000);
            });
            it("Then: should not be a tag with the name 'Nuevo Tag de Prueba' ", () => {
                // cy.contains(tagName).should("not.exist");
                cy.get("a[href='#/tags/']").first().click();
                cy.contains(tagName).click();
                cy.contains(/Delete tag/).click();
                cy.get("button[data-test-button='confirm']").click();
            });
        });
    });
});
