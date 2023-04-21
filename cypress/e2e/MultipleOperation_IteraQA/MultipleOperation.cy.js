
describe('Multiple Web Elements testing\n1. Registration Form\n2. Check Boxes\n3. Radio Buttons\n4. Drop Down\n5. File Upload', function(){

    beforeEach('Check box testing', function(){
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
    })
        describe('Filling Registration Form',()=>{
            it('Entering testing data to validate',()=>{
                cy.get('#name').type('Davinder Sharma')
                cy.get('#phone').type('9876543210')
                cy.get('#email').type('abc@gmail.com')
                cy.get('#password').type('Abc@987654321')
                cy.get('#address').type('Bengaluru')
                cy.get("button[name='submit']").click()
            })

        })


        describe('Validating checkboxes are working',()=>{
         it('Click on Female Check Box and Verify',function(){
         cy.get('#female').should('be.visible').check()
         })
    
            it('Click on Male Check Box and Validate',()=>{
            cy.get('#male').should('be.visible').check().should('be.checked')
            cy.get('#female').should('be.visible').and('not.be.checked')
            cy.get('#other').should('be.visible').and('not.be.enabled')
         })
            
    })
        describe('Testing with multiple check boxes', ()=>{
           
            it('Clicking and Un-Clicking multiple Check Boxes',()=>{
                
                cy.get('#monday').should('be.visible').check().and('be.checked') 
                cy.get('#tuesday').should('be.visible').check().and('be.checked') 
                cy.get('#wednesday').should('be.visible').check().and('be.checked') 
                cy.get('#thursday').should('be.visible').check().and('be.checked') 
                cy.get('#friday').should('be.visible').check().and('be.checked') 
                cy.get('#saturday').should('be.visible').check().and('be.checked') 
                cy.get('#sunday').should('be.visible').check().and('be.checked')  

                cy.get('#monday').should('be.visible').uncheck().and('not.be.checked') 
                cy.get('#tuesday').should('be.visible').uncheck().and('not.be.checked') 
                cy.get('#wednesday').should('be.visible').uncheck().and('not.be.checked') 
                cy.get('#thursday').should('be.visible').uncheck().and('not.be.checked') 
                cy.get('#friday').should('be.visible').uncheck().and('not.be.checked') 
                cy.get('#saturday').should('be.visible').uncheck().and('not.be.checked') 
                cy.get('#sunday').should('be.visible').uncheck().and('not.be.checked')    
            })


            

        })


})  