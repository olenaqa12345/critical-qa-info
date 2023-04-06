describe('template spec', () => {

    //Function checks href of social media links in footer
    const checkLinksSocialMedia = ({testData, expectedResult}) =>
    function () {
    
        cy.visit('/');
        cy.get(`${testData}`)
        .should('have.attr', 'href')
        .and('contain', `${expectedResult}`)
    
    }
    
    it('Check href link Artikel in header', checkLinksSocialMedia({testData: 'a[aria-label="Facebook"]', expectedResult: 'https://www.facebook.com/people/Critical-QA/100076123526819/'}))
    it('Check href link Glossar in header', checkLinksSocialMedia({testData: 'a[aria-label="Instagram"]', expectedResult: 'https://www.instagram.com/critical_qa/'}))
    it('Check href link Impressum in header', checkLinksSocialMedia({testData: 'a[aria-label="LinkedIn"]', expectedResult: 'https://www.linkedin.com/company/77079000'}))
    it('Check href link of logo in header', checkLinksSocialMedia({testData: 'a[aria-label="Xing"]', expectedResult: 'https://www.xing.com/pages/critical-qa'}))
    it('Check href link of logo in header', checkLinksSocialMedia({testData: 'a[aria-label="Youtube"]', expectedResult: 'https://www.youtube.com/channel/UC0_tTtl6bbl_ldKpTizfmGA'}))
  
  })