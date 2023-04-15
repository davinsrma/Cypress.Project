///<reference types="cypress"/>


it('Read Files with the help of fixture funtion',function(){
    cy.fixture('example.json').then((data)=>{
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.body)

    })
})