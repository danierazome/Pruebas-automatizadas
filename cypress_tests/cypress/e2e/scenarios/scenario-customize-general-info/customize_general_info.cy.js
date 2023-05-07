import LoginPage from "../../../support/pageobjects/LoginPage";

describe("Change publication information regarding title and description", () => {
    context("Given: Access web site", () => {
        beforeEach(() => {
            LoginPage.visitLoginPage();
        });
        context("When:  ", () => {
            beforeEach(() => {
                LoginPage.fillEmailLogin("lrozoq@gmail.com");
                LoginPage.fillPasswordLogin("I*%^sC!7B65Z");
                LoginPage.clickFormLogin();
                cy.get("a[href='#/settings/']").click();
                cy.get("a[href='#/settings/general/']").click();
                cy.get("button").contains("Expand").click();
                cy.get("input[data-test-title-input]").clear().type("New Tittle Test");
                cy.get("input[data-test-description-input]").clear().type("New Description Test");
                cy.get("button").contains(/Save/).click();
            });
            it("should display the settings table", () => {
                cy.get("table").should("exist");
            });
        });
    });
});
