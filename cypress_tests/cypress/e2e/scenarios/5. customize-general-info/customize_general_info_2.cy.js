import LoginPage from "../../../support/pageobjects/LoginPage";

describe("Change publication information regarding timezone and language", () => {
    context("Given: Access web site", () => {
        beforeEach(() => {
            LoginPage.visitLoginPage();
        });
        context("When: Go to the Settings page and save the timezone and language of the website. ", () => {
            beforeEach(() => {
                LoginPage.fillEmailLogin("lrozoq@gmail.com");
                LoginPage.fillPasswordLogin("I*%^sC!7B65Z");
                LoginPage.clickFormLogin();
                cy.get("a[href='#/settings/']").click();
                cy.get("a[href='#/settings/general/']").click();
                cy.get("button[data-test-toggle-timezone]").click();
                cy.get("#timezone").select("America/Bogota");
                cy.get("button[data-test-toggle-timezone]").click();
                cy.get("button[data-test-toggle-lang]").click();
                const field = cy.get("input[data-test-input='locale']");
                field.clear();
                field.type("es");
                cy.get("button[data-test-toggle-lang]").click();
                cy.get("button").contains(/Save/).click();
            });
            it("Then: should validate timezone", () => {
                cy.get("button").contains(/Saved/).should('exist');
            });
        });
    });
});
