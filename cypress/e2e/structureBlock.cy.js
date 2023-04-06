describe('template spec', () => {


//Test checks if block on Home page has right structure
// HOW TO DO

    const arrayBlocks = [
        {
            blockPicture: "https://firebasestorage.googleapis.com/v0/b/jpp-frontend.appspot.com/o/images%2Fjpp%2FArticle%20Image-AutomatedTesting.png?alt=media&token=af084484-8e4f-4df1-9a2e-7a6ff401f17e",
            blockTitle: "QUALITY-ASSURANCE",
            blockBigtitle: "Automated Testing",
            blockDate: "09/11/2022",
            blockText: "Automatisierte Tests sind kostensparend, zeiteffizient und besser skalierbar. Mit den richtigen Tools wirst du deinen Job langfristig verbessern.",
            blockButton: "Mehr"
        },
        {
            blockTitle2: "",
            blockImage2: ""
        },
        {
            blockTitle3: "",
            blockImage3: ""
        }
    ]


    //Function 
    // const chckHrefLinkHeader = ({ testData, expectedResult }) =>
    //     function () {

    //         cy.visit('/');
    //         cy.get(`${testData}` + '.css-18dlc13 .chakra-aspect-ratio')
    //             .should('have.attr', 'href')
    //             .and('contain', `${expectedResult}`)

    //     }

    // it('', chckHrefLinkHeader({ testData: 'div[href="/quality-assurance/automated-testing/"]' }))
    // it.skip('Check href link Glossar in header', chckHrefLinkHeader({ testData: 'a[href="/glossar/"]', expectedResult: '/glossar/' }))
    // it.skip('Check href link Impressum in header', chckHrefLinkHeader({ testData: 'a[href="/impressum/"]', expectedResult: '/impressum/' }))



    tableTest.forEach(({arrayBlocks}) => {
        it(`Test`, () => {

            cy.visit('/')
            cy.get('.css-18dlc13 .chakra-aspect-ratio')
            .should('contain', `${arrayBlocks.blockPicture}`);

        })
    })
})