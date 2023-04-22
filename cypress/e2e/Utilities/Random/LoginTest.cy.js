

// import { TestLogin } from "../Utility/Random/loginPage";

import { TestLogin } from "./loginPage"


// const loginPage=new TestLogin()
const loginPage=new TestLogin()


describe('Login feature check with valid and Invalid credential',function(){
    beforeEach(function(){
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })

    it('Login with Valid userName and Password',function(){
    
        loginPage.enterUsername('student')
        loginPage.enterPassword('Password123')
        loginPage.clickSubmit()
        cy.get('.post-title').should('have.text','Logged In Successfully')

    })

    it('Login with Valid userName and Invalid password',function(){
    
        loginPage.enterUsername('student')
        loginPage.enterPassword('Password123_wrong')
        loginPage.clickSubmit()

    cy.get('#error').should('have.text', 'Your password is invalid!')
    
    })
    it('Login with invalid userName and Valid password',function(){
    
        loginPage.enterUsername('student_Wrong')
        loginPage.enterPassword('Password123')
        loginPage.clickSubmit()
        
        cy.get('#error').should('have.text', 'Your username is invalid!')


        
        })

})