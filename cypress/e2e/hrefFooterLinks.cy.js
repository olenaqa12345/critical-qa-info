describe('template spec', () => {

    //Function checks href of links in footer
    const checkHrefLinkFooter = ({testData, expectedResult}) =>
    function () {
    
        cy.visit('/');
        cy.get(`${testData}`)
        .should('have.attr', 'href')
        .and('contain', `${expectedResult}`)
    
    }
    
    it('Check href link Artikel in footer', checkHrefLinkFooter({testData: 'footer a[href="/artikel/"]', expectedResult: '/artikel/'}))
    it('Check href link Glossar in footer', checkHrefLinkFooter({testData: 'footer a[href="/glossar/"]', expectedResult: '/glossar/'}))
    it('Check href link Impressum in footer', checkHrefLinkFooter({testData: 'footer a[href="https://forms.monday.com/forms/6926ed5a4f1f16bf779a20aa4080c943?r=use1"]', expectedResult: 'https://forms.monday.com/forms/6926ed5a4f1f16bf779a20aa4080c943?r=use1'}))
    it('Check href link in footer', checkHrefLinkFooter({testData: 'footer a[href="/fuer-unternehmen/"]', expectedResult: '/fuer-unternehmen/'}))
    it('Check href link in footer', checkHrefLinkFooter({testData: 'footer a[href="/impressum/"]', expectedResult: '/impressum/'}))
    it('Check href link in footer', checkHrefLinkFooter({testData: 'footer a[href="/faq/"]', expectedResult: '/faq/'}))
    it('Check href link in footer', checkHrefLinkFooter({testData: 'footer a[href="/datenschutz/"]', expectedResult: '/datenschutz/'}))
    it('Check href link in footer', checkHrefLinkFooter({testData: 'footer .css-3q3gqs a[href="/impressum/"]', expectedResult: '/impressum/'}))
  
  })