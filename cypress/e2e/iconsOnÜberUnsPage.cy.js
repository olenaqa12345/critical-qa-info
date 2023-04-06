describe('template spec', () => {

    //Function checks icons are displayed on Über uns page

    const checkIconsAboutUs = ({testData, expectedResult}) =>
    function () {
    
        cy.visit('/impressum/');
        cy.get(`${testData}`)
        .should('have.attr', 'd')
        .and('contain', `${expectedResult}`)
    
    }
    
    it('Check icon Facebook', checkIconsAboutUs({testData: '.css-x1hl45 li:nth-child(1) path', expectedResult: 'M21.5807 7.20703V5.16536C21.5807 4.0824 21.1505 3.04379 20.3847 2.27801C19.619 1.51224 18.5804 1.08203 17.4974 1.08203C16.4144 1.08203 15.3758 1.51224 14.61 2.27801C13.8443 3.04379 13.4141 4.0824 13.4141 5.16536V7.20703M1.16406 25.582V34.5654C1.16406 34.8903 1.29312 35.2018 1.52286 35.4316C1.75259 35.6613 2.06417 35.7904 2.38906 35.7904H13.4141L1.16406 25.582ZM31.7891 25.582V34.5654C31.7891 34.8903 31.66 35.2018 31.4303 35.4316C31.2005 35.6613 30.889 35.7904 30.5641 35.7904H21.5807L31.7891 25.582ZM21.5807 7.20703H30.5641C30.889 7.20703 31.2005 7.33609 31.4303 7.56582C31.66 7.79556 31.7891 8.10714 31.7891 8.43203V17.4154L21.5807 7.20703ZM1.16406 17.4154V8.43203C1.16406 8.10714 1.29312 7.79556 1.52286 7.56582C1.75259 7.33609 2.06417 7.20703 2.38906 7.20703H13.4141L1.16406 17.4154ZM21.5807 35.7904V37.832C21.5807 38.915 21.1505 39.9536 20.3847 40.7194C19.619 41.4852 18.5804 41.9154 17.4974 41.9154C16.4144 41.9154 15.3758 41.4852 14.61 40.7194C13.8443 39.9536 13.4141 38.915 13.4141 37.832V35.7904H21.5807ZM1.16406 17.4154H3.20573C4.2887 17.4154 5.32731 17.8456 6.09308 18.6113C6.85886 19.3771 7.28906 20.4157 7.28906 21.4987C7.28906 22.5817 6.85886 23.6203 6.09308 24.386C5.32731 25.1518 4.2887 25.582 3.20573 25.582H1.16406V17.4154ZM31.7891 17.4154H33.8307C34.9137 17.4154 35.9523 17.8456 36.7181 18.6113C37.4839 19.3771 37.9141 20.4157 37.9141 21.4987C37.9141 22.5817 37.4839 23.6203 36.7181 24.386C35.9523 25.1518 34.9137 25.582 33.8307 25.582H31.7891V17.4154Z'}))
    it('Check icon Instagram', checkIconsAboutUs({testData: '.css-x1hl45 li:nth-child(2) path', expectedResult: 'M21.5807 7.20703V5.16536C21.5807 4.0824 21.1505 3.04379 20.3847 2.27801C19.619 1.51224 18.5804 1.08203 17.4974 1.08203C16.4144 1.08203 15.3758 1.51224 14.61 2.27801C13.8443 3.04379 13.4141 4.0824 13.4141 5.16536V7.20703M1.16406 25.582V34.5654C1.16406 34.8903 1.29312 35.2018 1.52286 35.4316C1.75259 35.6613 2.06417 35.7904 2.38906 35.7904H13.4141L1.16406 25.582ZM31.7891 25.582V34.5654C31.7891 34.8903 31.66 35.2018 31.4303 35.4316C31.2005 35.6613 30.889 35.7904 30.5641 35.7904H21.5807L31.7891 25.582ZM21.5807 7.20703H30.5641C30.889 7.20703 31.2005 7.33609 31.4303 7.56582C31.66 7.79556 31.7891 8.10714 31.7891 8.43203V17.4154L21.5807 7.20703ZM1.16406 17.4154V8.43203C1.16406 8.10714 1.29312 7.79556 1.52286 7.56582C1.75259 7.33609 2.06417 7.20703 2.38906 7.20703H13.4141L1.16406 17.4154ZM21.5807 35.7904V37.832C21.5807 38.915 21.1505 39.9536 20.3847 40.7194C19.619 41.4852 18.5804 41.9154 17.4974 41.9154C16.4144 41.9154 15.3758 41.4852 14.61 40.7194C13.8443 39.9536 13.4141 38.915 13.4141 37.832V35.7904H21.5807ZM1.16406 17.4154H3.20573C4.2887 17.4154 5.32731 17.8456 6.09308 18.6113C6.85886 19.3771 7.28906 20.4157 7.28906 21.4987C7.28906 22.5817 6.85886 23.6203 6.09308 24.386C5.32731 25.1518 4.2887 25.582 3.20573 25.582H1.16406V17.4154ZM31.7891 17.4154H33.8307C34.9137 17.4154 35.9523 17.8456 36.7181 18.6113C37.4839 19.3771 37.9141 20.4157 37.9141 21.4987C37.9141 22.5817 37.4839 23.6203 36.7181 24.386C35.9523 25.1518 34.9137 25.582 33.8307 25.582H31.7891V17.4154Z'}))
    it('Check icon LinkedIn', checkIconsAboutUs({testData: '.css-x1hl45 li:nth-child(3) path', expectedResult: 'M21.5807 7.20703V5.16536C21.5807 4.0824 21.1505 3.04379 20.3847 2.27801C19.619 1.51224 18.5804 1.08203 17.4974 1.08203C16.4144 1.08203 15.3758 1.51224 14.61 2.27801C13.8443 3.04379 13.4141 4.0824 13.4141 5.16536V7.20703M1.16406 25.582V34.5654C1.16406 34.8903 1.29312 35.2018 1.52286 35.4316C1.75259 35.6613 2.06417 35.7904 2.38906 35.7904H13.4141L1.16406 25.582ZM31.7891 25.582V34.5654C31.7891 34.8903 31.66 35.2018 31.4303 35.4316C31.2005 35.6613 30.889 35.7904 30.5641 35.7904H21.5807L31.7891 25.582ZM21.5807 7.20703H30.5641C30.889 7.20703 31.2005 7.33609 31.4303 7.56582C31.66 7.79556 31.7891 8.10714 31.7891 8.43203V17.4154L21.5807 7.20703ZM1.16406 17.4154V8.43203C1.16406 8.10714 1.29312 7.79556 1.52286 7.56582C1.75259 7.33609 2.06417 7.20703 2.38906 7.20703H13.4141L1.16406 17.4154ZM21.5807 35.7904V37.832C21.5807 38.915 21.1505 39.9536 20.3847 40.7194C19.619 41.4852 18.5804 41.9154 17.4974 41.9154C16.4144 41.9154 15.3758 41.4852 14.61 40.7194C13.8443 39.9536 13.4141 38.915 13.4141 37.832V35.7904H21.5807ZM1.16406 17.4154H3.20573C4.2887 17.4154 5.32731 17.8456 6.09308 18.6113C6.85886 19.3771 7.28906 20.4157 7.28906 21.4987C7.28906 22.5817 6.85886 23.6203 6.09308 24.386C5.32731 25.1518 4.2887 25.582 3.20573 25.582H1.16406V17.4154ZM31.7891 17.4154H33.8307C34.9137 17.4154 35.9523 17.8456 36.7181 18.6113C37.4839 19.3771 37.9141 20.4157 37.9141 21.4987C37.9141 22.5817 37.4839 23.6203 36.7181 24.386C35.9523 25.1518 34.9137 25.582 33.8307 25.582H31.7891V17.4154Z'}))
   
  
  })