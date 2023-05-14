/// <reference types="cypress" />

import LoginPage from "../../../../support/pageobjects/LoginPage";
import MemberPage from "../../../../support/pageobjects/MemberPage";


describe("Import members with CSV file", () => {
    context("Given: Access web site", () => {
        beforeEach( () => {
            LoginPage.visitLoginPage();
        });

        context("When: Validate whether the members have been saved correctly through a CSV file", () => {
            beforeEach( () => {
                LoginPage.fillEmailLogin();
                LoginPage.fillPasswordLogin();
                LoginPage.clickFormLogin();
                MemberPage.goToMemberPage();
                MemberPage.importCSV();
            });
            it("Then: A table should exist showing the created members.", () => {
                cy.get("table").should("exist")
            })
        });
    });
});