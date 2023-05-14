import LoginPage from "../pages/LoginPage";
import PARAMETERS from "../../parameters"

const ghostUrl = Cypress.env("baseURL");
const CONSTANTS={
  MAIN_ERROR_LABEL:"Please fill out every field correctly to set up your site."
}
describe("Create a ghost account Functionality", () => {

  beforeEach(() => {
    // Clear the cookies and session
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  // scenario -> Create Ghost account with empty registration fields

  it("Create Ghost account with empty registration fields", () => {
    // Given that I am on the Ghost sign-up page

    cy.visit(`${ghostUrl}/ghost/#/setup`);
    
    // When I leave all registration fields empty
    cy.get("input[data-test-blog-title-input]").clear();
    cy.get("input[data-test-name-input]").clear();
    cy.get("input[data-test-email-input]").clear();
    cy.get("input[data-test-password-input]").clear();
    
    // Then I should not be able to create an account

    cy.get("button[data-test-button='setup']").click();
    cy.contains(CONSTANTS.MAIN_ERROR_LABEL)

  });

  // scenario -> Create an account in Ghost by entering all fields correctly.

  it("Create an account in Ghost by entering all fields correctly", () => {
    
    // Given that I am on the Ghost sign-up page
    
    cy.visit(`${ghostUrl}/ghost/#/setup`);

    // When I enter the following information

    cy.get("input[data-test-blog-title-input]").type(PARAMETERS.BLOG_NAME);
    cy.get("input[data-test-name-input]").type(PARAMETERS.USER_NAME);
    cy.get("input[data-test-email-input]").type(PARAMETERS.USER_EMAIL);
    cy.get("input[data-test-password-input]").type(PARAMETERS.USER_PASSWORD);

    // Then I should be able to create an account and log in with it.
    
    cy.get("button[data-test-button='setup']").click();
    cy.visit(`${ghostUrl}/ghost/#/signout`)
    LoginPage.visitLoginPage();
    LoginPage.fillEmailLogin();
    LoginPage.fillPasswordLogin();
    LoginPage.clickFormLogin(); 
    });
  
});
