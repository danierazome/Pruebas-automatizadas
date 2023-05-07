class LoginPage {
    visitLoginPage() {
        const baseURL = Cypress.env("baseURL");
        cy.visit(`${baseURL}/ghost`);
    }

    fillEmailLogin(value) {
        const field = cy.get("#identification");
        field.clear();
        field.type(value);
        return this;
    }

    fillPasswordLogin(value) {
        const field = cy.get("#password");
        field.clear();
        field.type(value);
        return this;
    }

    clickFormLogin() {
        const button = cy.get("button").contains(/Sign/);
        button.click();
    }
}

export default new LoginPage();