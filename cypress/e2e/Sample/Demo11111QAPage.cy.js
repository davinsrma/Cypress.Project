/// <reference types="Cypress" />

describe('Test for DemoQA Website',()=>{

it('Demo QA Page Test',()=>{
cy.visit('https://demoqa.com/')
cy.contains('Elements').click()
cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').click()

cy.get('#userName').type('Davider Sharma')
cy.get('#userEmail').type('davinder.sharma@gmail.com')
cy.get('#currentAddress').type('Bengaluru')
cy.get('#permanentAddress').type('patna')
cy.get('#submit').click()

    })

    
})