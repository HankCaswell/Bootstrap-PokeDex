
describe ('My first Cypress Test', () => {
    
    it("visits the app and asserts title", () => {
        cy.visit('/')
        cy.get('h1').should('contain', 'PokeDex')
    })
})