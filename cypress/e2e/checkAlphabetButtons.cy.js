describe('template spec', () => {

    //Function checks presence all alphabet buttons
    

    const checkAlphabetButtonsPresence = () =>

    function () {

        cy.visit('/glossar/')


        //'.chakra-wrap__list.length'
        
        for(let i = 1; i < 28; i++ ){ 
 
            cy.get(`.chakra-wrap__list li:nth-child(${i})`) 
            .should('be.visible') 
     
        }
    
    }
    
    it('', checkAlphabetButtonsPresence());

  
  })