describe('template spec', () => {

    //Check href of breadcrumbs 
    const colorLink = ({testData, expectedResult}) =>
    function () {  
        cy.visit('/glossar/');

         cy.get(`${testData}`)
         .should('have.attr', 'href')
         .and('contains', `${expectedResult}`)
    }
     
    it('Check blocks', colorLink({testData: '.chakra-breadcrumb__list li:nth-child(1) a', expectedResult: '/'}))
    it('Check blocks', colorLink({testData: '.chakra-breadcrumb__list li:nth-child(2) a', expectedResult: '/glossar/'}))

  })