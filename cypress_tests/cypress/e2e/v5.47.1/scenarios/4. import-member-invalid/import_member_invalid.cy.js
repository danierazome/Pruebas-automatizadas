/// <reference  types="cypress" />

import LoginPage from "../../../support/pageobjects/LoginPage";
import MemberPage from "../../../support/pageobjects/MemberPage";

describe("Import members with CSV file invalid", () => {
    context("Given: Access web site", () => {
        beforeEach( () => {
            LoginPage.visitLoginPage();
        });

        context("When: Validate member records saved correctly via CSV with invalid email", () => {
            beforeEach( () => {
                LoginPage.fillEmailLogin();
                LoginPage.fillPasswordLogin();
                LoginPage.clickFormLogin();
                MemberPage.goToMemberPage();
                MemberPage.importInvalidCSV();
            });
            it("Then: A member that should not have been created due to an invalid email address.", () => {
                cy.get("a[data-test-table-data='details']").should("not.contain", "Juan Perez");

            })
        });
    });
});