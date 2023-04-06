describe('template spec', () => {

    //Function checks href of links in header : Artikel, Glossar, Über uns and Logo
    const chckHrefLinkHeader = ({testData, expectedResult}) =>
    function () {
    
        cy.visit('/');
        cy.get(`${testData}`)
        .should('have.attr', 'href')
        .and('contain', `${expectedResult}`)
    
    }
    
    it('Check href link Artikel in header', chckHrefLinkHeader({testData: 'a[href="/artikel/"]', expectedResult: '/artikel/'}))
    it('Check href link Glossar in header', chckHrefLinkHeader({testData: 'a[href="/glossar/"]', expectedResult: '/glossar/'}))
    it('Check href link Impressum in header', chckHrefLinkHeader({testData: 'a[href="/impressum/"]', expectedResult: '/impressum/'}))
    it('Check href link of logo in header', chckHrefLinkHeader({testData: 'a[href="/"]', expectedResult: '/'}))
  
  })  