import LoginPage from "../pages/LoginPage";
import CreateNewPost from "../pages/CreateNewPost";

const ghostUrl = Cypress.env("baseURL");
const CONSTANTS = {
    POST_TITLE: "Test post title",
    POST_CONTENT: "Test post content",
    IMAGE:  "cypress/fixtures/logo.png"
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

    // When I write and publish a new post
    CreateNewPost.writePost(CONSTANTS.POST_TITLE, CONSTANTS.POST_CONTENT)
    CreateNewPost.publishPost()

    // Then I should see the post published on the website
    cy.contains(CONSTANTS.POST_TITLE);
    cy.contains(CONSTANTS.POST_CONTENT);
  });


  it("Write a post for the website created by attaching an image from my device",()=>{
        
    // Given that I am logged into my Ghost account
    LoginPage.visitLoginPage();
    LoginPage.fillEmailLogin();
    LoginPage.fillPasswordLogin();
    LoginPage.clickFormLogin();
    cy.wait(1000);
    cy.visit(`${ghostUrl}/ghost/#/site`);
    
    // When I write and publish a new post with an image
    CreateNewPost.writePost(CONSTANTS.POST_TITLE, CONSTANTS.POST_CONTENT)
    CreateNewPost.addImage(CONSTANTS.IMAGE)
    CreateNewPost.publishPost()

    // Then I should see the post published on the website with the image attached
    cy.contains(CONSTANTS.POST_TITLE);
    cy.contains(CONSTANTS.POST_CONTENT);
  })

  it("Write a post for the website created by attaching a selected image on the unsplash",()=>{
    
    // Given that I am logged into my Ghost account
    LoginPage.visitLoginPage();
    LoginPage.fillEmailLogin();
    LoginPage.fillPasswordLogin();
    LoginPage.clickFormLogin();
    cy.visit(`${ghostUrl}/ghost/#/site`);

    // When I write and publish a new post with an image
    CreateNewPost.writePost(CONSTANTS.POST_TITLE, CONSTANTS.POST_CONTENT)
    CreateNewPost.addImageUnplash(CONSTANTS.IMAGE)
    CreateNewPost.publishPost()
    
    // Then I should see the post published on the website with the image attached
    cy.contains(CONSTANTS.POST_TITLE);
    cy.contains(CONSTANTS.POST_CONTENT);
  })

})