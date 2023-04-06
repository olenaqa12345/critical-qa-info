//Test checks color button on main page
it('Check color button on main page', () => {
    
    cy.visit('/');
    cy.get('footer .chakra-stack .chakra-button')
    .should('have.css', 'background-color', 'rgb(191, 0, 27)')
        
})