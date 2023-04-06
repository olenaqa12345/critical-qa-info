import letters from '../fixtures/blocks/letterE.json';


describe('template spec', () => {

    //Function checks when i click on every letter of alphabet, then response with this corresponding letter is displayed

    //HOW TO DO IT

    let array = ['A', 'B', 'C']



    const checkHrefLinkFooter = ({testData, counter}) =>
    function () {
    
        cy.visit('/glossar/');
        cy.get(`${testData}`)
        .click()

        cy.get('.chakra-stack .css-10efrsm')
        .should('contain', array[--counter])


        //cy.log(letters[array[--counter]][--counter])

        // cy.contains('.css-10bfd3l', letters[array[--counter]])
        // .should('be.visible')

    }
  
    for(let i = 1; i < array.length; i++ ){ 
 
        it('', checkHrefLinkFooter({testData: `.chakra-wrap__list li:nth-child(${i})`, counter: `${i}`}))
 
    }

  })