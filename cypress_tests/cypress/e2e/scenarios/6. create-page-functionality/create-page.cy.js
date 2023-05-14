import LoginPage from "../../../support/pageobjects/LoginPage";
import CreatePage from "../../../support/pageobjects/CreatePage";
describe("Create new page on website", () => {
    context("Given: Access web site", () => {
        beforeEach(() => {
            LoginPage.visitLoginPage();
        });
        context("When: Go to Pages section and create a new page. ", () => {
            const timestamp = Date.now();
            const pageTitle = `Nueva Pagina de Prueba ${timestamp}`;

            beforeEach(() => {
                LoginPage.fillEmailLogin();
                LoginPage.fillPasswordLogin();
                LoginPage.clickFormLogin();
                CreatePage.writeNewPage(pageTitle);
                CreatePage.confirmNewPage();
            });
            it("Then: should see the created page", () => {
                cy.contains("Nueva Pagina de Prueba").eq(0).should("exist");
            });
        });
    });
});
