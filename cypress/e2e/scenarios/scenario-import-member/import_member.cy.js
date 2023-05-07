/// <reference types="cypress" />

context( "Import Member", () => {    
    it( "import member", () => {
        // Given
        cy.visit("http://localhost:2368/ghost");

        // When
        cy.get("#identification").type("lrozoq@gmail.com");
        cy.get("#password").type("LicethYaneth:3");
        cy.get("button").contains(/Sign/).click({ force: true });
        cy.get("a").contains(/Members/).click({ force: true });
        if( !cy.get("table").should("exist") ) {
            cy.contains(/CSV/).click();
            importCSV("cypress/fixtures/member-import-template.csv");
        } else {
            cy.get("button[data-test-button='members-actions']").click();
            cy.get("a[data-test-link='import-csv']").click();
            importCSV("cypress/fixtures/member-import-template-v2.csv");
        }

        // Then
        cy.get("table").should("exist")
    })
})

function importCSV( pathcsv ) {
    cy.get("input[type=file]").eq(0).selectFile(pathcsv, { force: true })
    cy.get("button").contains(/Import/).click();
    cy.get("button[data-test-button='close-import-members']").click({ force: true });
}