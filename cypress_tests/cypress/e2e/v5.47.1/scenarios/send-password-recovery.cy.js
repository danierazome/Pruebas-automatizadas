import LoginPage from "../pages/LoginPage";

describe("Verify that a password recovery message is not sent when the recovery process is initiated but not completed", () => {
    context("Given: Access web site", () => {
        beforeEach(() => {
            LoginPage.visitLoginPage();
        });
        context("When: Enter the email into the input field and click on the 'forgot' button ", () => {
            beforeEach(() => {
                LoginPage.fillEmailLogin();
                cy.get("button").contains("Forgot").click();
            });
            it("Then: displays an error message if email delivery fails ' ", () => {
                cy.contains("Failed to send email. Reason: Sending failed.").should("exist");
                cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
            });
        });
    });
});
