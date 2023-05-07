/// <reference types="cypress" />

describe("Import members with CSV file", () => {
    context("Given: Access web site", () => {
        beforeEach( () => {
            cy.visit("http://localhost:2369/ghost");
        });

        context("When: Validate whether the members have been saved correctly through a CSV file", () => {
            beforeEach( () => {
                cy.get("#identification").type("lrozoq@gmail.com");
                cy.get("#password").type("I*%^sC!7B65Z");
                cy.get("button").contains(/Sign/).click({ force: true });
                cy.get("a").contains(/Members/).click({ force: true });
                const existTableMember = cy.get("body").then( $body => {
                    if( $body.find("table").length) {
                        return true;
                    }
                    return false;
                });
                if( !existTableMember ) {
                    cy.contains(/CSV/).click();
                    importCSV("cypress/fixtures/member-import-template.csv");
                } else {
                    cy.get("button[data-test-button='members-actions']").click();
                    cy.get("a[data-test-link='import-csv']").click();
                    importCSV("cypress/fixtures/member-import-template-v2.csv");
                }
            });
            it("Then: A table should exist showing the created members.", () => {
                cy.get("table").should("exist")
            })
        });
    });
});

function importCSV( pathcsv ) {
    cy.get("input[type=file]").eq(0).selectFile(pathcsv, { force: true })
    cy.get("button").contains(/Import/).click();
    cy.get("button[data-test-button='close-import-members']").click({ force: true });
}