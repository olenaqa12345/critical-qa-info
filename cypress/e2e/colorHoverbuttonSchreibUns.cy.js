
describe('template spec', () => {

    //Function checks color of hover of button Schreib uns
    const checkColorHoverLinkHeader = ({testData, expectedResult}) =>
    function () {  

        cy.visit('/');
        cy.get(`${testData}`)
        .realHover({pointer: "mouse", position: "center", scrollBehavior: "center"})
        cy.get(`${testData}`)
        .should ('have.css', 'background-color', `${expectedResult}`)

    }
    

    //DOESNT WORK
    it('Check color of hover of button Schreib uns', checkColorHoverLinkHeader({testData: 'a[href="https://forms.monday.com/forms/6926ed5a4f1f16bf779a20aa4080c943?r=use1"]', expectedResult: 'rgb(191, 0, 27)'}))

  
  })