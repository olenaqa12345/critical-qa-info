describe('template spec', () => {

    //Function checks if all bloks are displayed when i click on See All button
    const checkSeeAllAlphabet = ({testData, expectedResult}) =>
    function () {
    
        cy.visit('/glossar/');
        cy.get(`${testData}`)
        .click()
        
        for(let i = 1; i < 28; i++ ){ 
 
            cy.get(`:nth-child(${i}) > .css-1vwo2gr > .chakra-button `)
            .should('be.visible')
     
        }
    
    }

    
    it('Check icon Facebook', checkSeeAllAlphabet({testData: ':nth-child(28) > .chakra-button'}))
    

})