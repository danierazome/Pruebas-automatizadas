class CreatePage{
    writeNewPage(pageTitle){
        cy.get("a[href='#/pages/']").eq(0).click();
        cy.get("a[href='#/editor/page/']").click();
        cy.get("textarea[placeholder='Page title']").type(pageTitle);
        cy.get("p").invoke("text","Esto es una nueva descripción para la pagina");
        cy.get("button").contains("Publish").click();
        cy.get("button.gh-publish-setting-title").click();
        cy.get("label").contains("Set it live now").click();
    }

    confirmNewPage(){
        cy.get('button[data-test-button="continue"]').click();
        cy.get("button[data-test-button='confirm-publish']").click();
        cy.get('button[data-test-button="back-to-editor"]').click();
        cy.get('a[href="#/pages/"]').click();    
    }
}
export default new CreatePage();