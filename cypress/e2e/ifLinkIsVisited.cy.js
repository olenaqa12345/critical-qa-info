describe('template spec', () => {



    // Test checks on Glossary page if link is getting grey when i click on it
   // HOW TO DO IT


   // let linksAlphabet = ['.css-1vwo2gr', "Апельсин", "Слива"];


   
    
        


        //it('Check links', checkHrefLinkFooter({testData: `.chakra-wrap__list li:nth-child(${i})`}))
 



    it('Check links', () => {

        cy.visit('/glossar/')

            cy.get('a[href="/glossar/acceptance-testing/"]')
            .should('have.css', 'color', 'rgb(137, 137, 137)')

           // .click()

            cy.visit('/glossar/')


            // cy.get('a[href="/glossar/acceptance-testing/"]')
            // .should('have.css', 'color', 'rgb(137, 137, 137)')


    }) 


})
    