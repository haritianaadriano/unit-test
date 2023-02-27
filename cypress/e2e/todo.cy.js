describe("e2e test: ", () => {
    it("DOM render test: ", () => {
        cy.visit("http://localhost:3000");
    })
    it("Input: ", () => {
        cy.visit("http:///localhost:3000");
        cy.get('input')
            .type("test");
    })
    it("Todo: ", () => {
        cy.visit("http://localhost:3000");
        cy.get('input')
            .type("test{enter}");
        cy.get('.App')
            .should('contain', 'test');
    })
    it("ToDone: ", () => {
        cy.visit("http://localhost:3000");
        cy.get('input')
            .type("test{enter}");
        cy.get('[data-testid="test-test-0"]').check();
        cy.get(".App")
            .should("contain", "test");
    })
})