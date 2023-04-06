describe('template spec', () => {

    //Function href of button Schreib uns on Home page
    const colorLink = ({testData, expectedResult}) =>
    function () {  
        cy.visit('/');
         cy.get(`${testData}`)
         .should('have.attr', 'href')
         .and('contain', `${expectedResult}`)
    }
    
    it.skip('Check href of button Schreib uns on Home page', colorLink({testData: 'a[href="https://forms.monday.com/forms/6926ed5a4f1f16bf779a20aa4080c943?r=use1"]', expectedResult: 'https://forms.monday.com/forms/6926ed5a4f1f16bf779a20aa4080c943?r=use1'}))
  
  })