import LoginPage from "../../../support/pageobjects/LoginPage";

describe("Change publication information regarding title and description", () => {
    context("Given: Access web site", () => {
        beforeEach(() => {
            LoginPage.visitLoginPage();
        });
        context("When: Go to the Settings page and save the title and description of the website. ", () => {
            beforeEach(() => {
                LoginPage.fillEmailLogin("lrozoq@gmail.com");
                LoginPage.fillPasswordLogin("I*%^sC!7B65Z");
                LoginPage.clickFormLogin();
                cy.get("a[href='#/settings/']").click();
                cy.get("a[href='#/settings/general/']").click();
                cy.get("button").contains("Expand").click();
                cy.get("input[data-test-title-input]").clear().type("New Title Test");
                cy.get("input[data-test-description-input]").clear().type("New Description Test");
                cy.get("button").contains(/Save/).click();
            });
            it("Then: should display new title and description on website page", () => {
                cy.get("button").contains(/Saved/).should('exist');
                cy.get("a[href='#/site/']").click();
                cy.contains("New Title Test").should("exist");
            });
        });
    });
});
