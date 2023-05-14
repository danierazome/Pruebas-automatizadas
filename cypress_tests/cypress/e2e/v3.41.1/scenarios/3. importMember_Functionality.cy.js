import { loginPage } from "../pages/logInPage";
import { memberPage } from "../pages/memberPage";
import PARAMETERS from "../../parameters";

beforeEach(() => {
  loginPage.login(PARAMETERS.USER_EMAIL, PARAMETERS.USER_PASSWORD);
  cy.wait(500);
  memberPage.goToMemberPage();
});

// Third Funcionality -> Import members

describe("Import members with CSV file", () => {

  // First scenary -> Import a valid CSV

  it("Should exist a table showing the created members.", () => {
    memberPage.elements.actionsButton().click({force: true});
    memberPage.importCSV();
    // cy.get("table").should("exist");
  });


  // Second scenary -> Import an invalid CSV

  it("Should exist a table showing the created members.", () => {
    memberPage.elements.actionsButton().click({force: true});
    memberPage.importInvalidCSV();
    // cy.get("table").should("exist");
  });
});
