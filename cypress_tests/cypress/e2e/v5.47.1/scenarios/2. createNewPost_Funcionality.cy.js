import LoginPage from "../pages/LoginPage";
import CreateNewPost from "../pages/CreateNewPost";

const ghostUrl = Cypress.env("baseURL");
const CONSTANTS = {
    POST_TITLE: "Test post title",
    POST_CONTENT: "Test post content"
  };

describe("Create a ghost new Post Functionality", () => {

  it("Write a post for the website created in Ghost only using text", () => {
    
    // Given that I am logged into my Ghost account
    LoginPage.visitLoginPage();
    LoginPage.fillEmailLogin();
    LoginPage.fillPasswordLogin();
    LoginPage.clickFormLogin();
    cy.visit(`${ghostUrl}/ghost/#/site`);
    cy.wait(3000);

    // When I visit the Posts published page
    CreateNewPost.writePost(CONSTANTS.POST_TITLE, CONSTANTS.POST_CONTENT)
    CreateNewPost.publishPost()
    cy.screenshot();

    // Then I should see the post published on the website
    cy.contains(CONSTANTS.POST_TITLE);
    cy.contains(CONSTANTS.POST_CONTENT);
  });

})