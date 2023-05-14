class CreateTag{
    newTag(tagName){
        cy.get("a[href='#/tags/']").eq(0).click();
        cy.get("a[href='#/tags/new/']").click();
        cy.get("input[data-test-input='tag-name']").type(tagName);
        cy.get("input[data-test-input='accentColor']").type("123123");
        cy.get('input[data-test-input="tag-slug"]').type("new-tag");
        cy.get('textarea[data-test-input="tag-description"]').type("Esto es un tag de prueba con una descripcion corta");
        cy.get("button").contains(/Save/).click();
        cy.get("a[href='#/tags/']").eq(0).click();
    }
}
export default new CreateTag();