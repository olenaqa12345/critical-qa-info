describe('template spec', () => {

    //Function checks color of hover of links in header : Artikel, Glossar, Über uns
    const checkColorHoverLinkHeader = ({testData, expectedResult}) =>
    function () {  

        cy.visit('/');
        cy.get(`${testData}`)
        .realHover({pointer: "mouse", position: "center", scrollBehavior: "center"})
        cy.get(`${testData}`)
        .should ('have.css', 'background-color', `${expectedResult}`)

    }
    
    //DOESNT WORK
    //it('Check color when i hover over link Artikel in header', checkColorHoverLinkHeader({testData: 'a[href="/artikel/"]', expectedResult: 'rgb(191, 0, 27)'}))
    it.skip('Check color when i hover over link Glossar in header', checkColorHoverLinkHeader({testData: 'a[href="/glossar/"]', expectedResult: 'rgb(191, 0, 27)'}))
    it.skip('Check color when i hover over link Über uns in header', checkColorHoverLinkHeader({testData: 'a[href="/impressum/"]', expectedResult: 'rgb(191, 0, 27)'}))
  
  })