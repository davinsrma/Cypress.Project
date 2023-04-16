 /// <reference types="cypress" />


describe('This test is for open google and search Sachin and Validate',()=>{


  it('Google Search', () => {
    cy.visit('https://www.google.com')
    cy.get('#APjFqb').type('Sachin')
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
    cy.get('.Maj6Tc > .REySof').should('be.visible')
   
    // Assertions Below 
    cy.contains('Overview').should('contain','Overview')
    cy.contains('Sachin Tendulkar').should('contain','Sachin Tendulkar')


  })







  })