describe('template spec', () => {

  //Function checks color of links in header : Artikel, Glossar, Über uns
  const colorLink = ({testData, expectedResult}) =>
  function () {  
      cy.visit('/');
       cy.get(`${testData}`)
      .should('have.css', 'background-color', `${expectedResult}`)
  }
  
  it.skip('Check color of Artikel link in header', colorLink({testData: 'a[href="/artikel/"]', expectedResult: 'rgba(0, 0, 0, 0)'}))
  it.skip('Check color of Glossar link in header', colorLink({testData: 'a[href="/glossar/"]', expectedResult: 'rgba(0, 0, 0, 0)'}))
  it.skip('Check color of Über uns link in header', colorLink({testData: 'a[href="/impressum/"]', expectedResult: 'rgba(0, 0, 0, 0)'}))

})