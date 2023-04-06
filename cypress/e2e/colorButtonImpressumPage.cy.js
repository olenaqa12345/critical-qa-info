describe('template spec', () => {

    //Function checks color of links in header : Artikel, Glossar, Über uns
    const colorLink = ({testData, expectedResult}) =>
    function () {  

        cy.visit('/impressum/');
        cy.get(`${testData}`)
        .should('have.css', 'background-color', `${expectedResult}`)
    }
    
    it('Check color of Artikel link in header', colorLink({testData: 'a[href="https://outlook.office365.com/owa/calendar/JetztQAundTestMitarbeiterfinden1@critical.qa/bookings/"]', expectedResult: 'rgb(191, 0, 27)'}))
    it('Check color of Glossar link in header', colorLink({testData: 'a[href="https://critical-qa.de/"]', expectedResult: 'rgb(191, 0, 27)'}))

})