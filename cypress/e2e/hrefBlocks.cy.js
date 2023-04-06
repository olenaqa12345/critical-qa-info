describe('template spec', () => {

    //Function checks that every block has right link
    const colorLink = ({testData, expectedResult}) =>
    function () {  
        cy.visit('/');
         cy.get(`${testData}`)
         .should('have.attr', 'href')
         .and('contain', `${expectedResult}`)
    }
    
    it('Check blocks', colorLink({testData: 'div[href="/quality-assurance/automated-testing/"]', expectedResult: '/quality-assurance/automated-testing/'}))
    it('Check blocks', colorLink({testData: 'div[href="/quality-assurance/code-coverage/"]', expectedResult: '/quality-assurance/code-coverage/'}))
    it('Check blocks', colorLink({testData: 'div[href="/quality-assurance/funktionales-testen/"]', expectedResult: '/quality-assurance/funktionales-testen/'}))
    it('Check blocks', colorLink({testData: 'div[href="/general/istqb-pruefung/"]', expectedResult: '/general/istqb-pruefung/'}))
    it('Check blocks', colorLink({testData: 'div[href="/quality-assurance/qa-prozess/"]', expectedResult: '/quality-assurance/qa-prozess/'}))
    it('Check blocks', colorLink({testData: 'div[href="/quality-assurance/software-testarten/"]', expectedResult: '/quality-assurance/software-testarten/'}))
    it('Check blocks', colorLink({testData: 'div[href="/quality-assurance/software-tester/"]', expectedResult: '/quality-assurance/software-tester/'}))
    it('Check blocks', colorLink({testData: 'div[href="/general/manueller-tester/"]', expectedResult: '/general/manueller-tester/'}))
    it('Check blocks', colorLink({testData: 'div[href="/quality-assurance/testing-lernen/"]', expectedResult: '/quality-assurance/testing-lernen/'}))
    it('Check blocks', colorLink({testData: 'div[href="/general/api-test/"]', expectedResult: '/general/api-test/'}))
    it('Check blocks', colorLink({testData: 'div[href="/quality-assurance/appium-fuer-mobile-testing-automation-/"]', expectedResult: '/quality-assurance/appium-fuer-mobile-testing-automation-/'}))
    it('Check blocks', colorLink({testData: 'div[href="/quality-assurance/software-qualitaetssicherung/"]', expectedResult: '/quality-assurance/software-qualitaetssicherung/'}))
    it('Check blocks', colorLink({testData: 'div[href="/quality-assurance/software-testing/"]', expectedResult: '/quality-assurance/software-testing/'}))
    it('Check blocks', colorLink({testData: 'div[href="/quality-assurance/testautomatisierung-fuer-software/"]', expectedResult: '/quality-assurance/testautomatisierung-fuer-software/'}))
    it('Check blocks', colorLink({testData: 'div[href="/faq/wann-ist-testautomatisierung-sinnvoll/"]', expectedResult: '/faq/wann-ist-testautomatisierung-sinnvoll/'}))    
    it('Check blocks', colorLink({testData: 'div[href="/faq/warum-devops/"]', expectedResult: '/faq/warum-devops/'}))
    it('Check blocks', colorLink({testData: 'div[href="/faq/was-heisst-qa/"]', expectedResult: '/faq/was-heisst-qa/'}))

  })