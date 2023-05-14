class CreateNewPost{

    writePost(post_title,post_content){
        cy.get("a[data-test-nav-custom='posts-Published']").click();
        cy.wait(2000);
        cy.get("a[data-test-new-post-button]").click();
        cy.wait(2000);
        cy.get("textarea[data-test-editor-title-input]").type(post_title);
        cy.get("div[data-kg=editor]").click().type(post_content);
    }

    publishPost(){
        cy.get("button[data-test-button='publish-preview']").click();
        cy.wait(6000);
        cy.get("button").contains("Publish").click({ force: true }); 
        cy.get("button[data-test-button='continue']").click();
        cy.get("button[data-test-button='confirm-publish']").click();
 
    }
}
export default new CreateNewPost();