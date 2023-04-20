
describe('Test, How to play with Checkbox and Radio Button', function(){


    beforeEach('Check box testing', function(){
        cy.visit('https://designsystem.digital.gov/components/checkbox/')
    })

    it('Click on Check Box and Verify',function(){
        cy.get(':nth-child(2) > :nth-child(2) > .usa-checkbox__label').should('be.visible').click()


    })


})  