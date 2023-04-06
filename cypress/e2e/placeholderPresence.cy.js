//Test plceholder in Email field

it('Check placeholder in Email field', () => {
    
    cy.visit('/');
    cy.get('input[type="email"]')
    .should('have.attr', 'placeholder')
    .and('contain', 'Email')
    
})