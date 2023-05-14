import LoginPage from "../pages/LoginPage";
import MemberPage from "../pages/MemberPage";

const ghostUrl = Cypress.env("baseURL");
const CONSTANTS = {}

describe("Import members with CSV file", () => {
    beforeEach( () => {
        LoginPage.visitLoginPage();
    });

    it("Import a valid CSV", () => {
        
        // Given that I am logged into my Ghost account
            LoginPage.fillEmailLogin();
            LoginPage.fillPasswordLogin();
            LoginPage.clickFormLogin();

        //When Validate whether the members have been saved correctly through a CSV file
            MemberPage.goToMemberPage();
            MemberPage.importCSV();
            
        // Then: A table should exist showing the created members
            cy.get("table").should("exist")
    });
});