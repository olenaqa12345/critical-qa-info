it('Check logo in footer', () => {
    
    cy.visit('/');
    cy.get('footer .chakra-stack img[alt="logo"]')
    .should('have.attr', 'src')
    .contains('/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.7639203d.png&w=256&q=75')
        
})