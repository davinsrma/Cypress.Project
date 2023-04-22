///<reference types="cypress"/>

describe('This test is to read and Write data to a file',function(){


it('Read Files with the help of fixture funtion',function(){
    cy.fixture('inputData.json').then((data)=>{
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.currentAddress)

    })
})

it('Write data to file',function(){
    cy.writeFile('./cypress/fixtures/writeData.txt','Hello My name is Davinder Sharma\n',{flag:'a+'})
    cy.writeFile('./cypress/fixtures/writeData.txt','Hello My name is Davinder Sharma\n',{flag:'a+'})
    cy.writeFile('./cypress/fixtures/writeData.txt','Hello My name is Davinder Sharma\n',{flag:'a+'})

})
})