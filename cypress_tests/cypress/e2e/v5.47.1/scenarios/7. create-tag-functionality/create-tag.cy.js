import LoginPage from "../../../../support/pageobjects/LoginPage";
import CreateTag from "../../../../support/pageobjects/CreateTag";

describe("Create new tag on website", () => {
    context("Given: Access web site", () => {
        beforeEach(() => {
            LoginPage.visitLoginPage();
        });
        context("When: Go to Tags section and create a new tag. ", () => {
            const timestamp = Date.now();
            const tagName = `Tag ${timestamp}`;
            
            beforeEach(() => {
                LoginPage.fillEmailLogin();
                LoginPage.fillPasswordLogin();
                LoginPage.clickFormLogin();
                CreateTag.newTag(tagName);
               
            });
            it("Then: should see the created page", () => {
                cy.contains(tagName).eq(0).should("exist");
            });
        });
    });
});
