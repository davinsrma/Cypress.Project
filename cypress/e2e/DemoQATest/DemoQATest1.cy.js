///<reference types="Cypress"/>

import { DemoQAHomePage } from "../DemoQAPages/DemoQAHomePage"

const demoQAHomePage=new DemoQAHomePage()

describe('Open DemoQA Home Page And Verify All Element options',function(){
    before(()=>{{
        cy.fixture('inputData.json').then(function(data){
            this.data=data
        })

    }})
 
    beforeEach('Open DemoQa Home Page',function(){
        cy.visit('https://demoqa.com/')
        demoQAHomePage.clickElement()
    })

    it.skip('Clicking on Element Button',function(){
        
    demoQAHomePage.clickTextButton()
    cy.get('#userName')
        .type(this.data.name)
    .tab()
        .type(this.data.email)
    .tab()
        .type(this.data.currentAddress)
    .tab()
        .type(this.data.permanentAddress)
    //     .tab()
    // .type('{enter}')
    // demoQAHomePage.enterFullName(this.data.name)
    // demoQAHomePage.enterEmail(this.data.email)
    // demoQAHomePage.entterCurrentAddress(this.data.currentAddress)
    // demoQAHomePage.enterPermanentAddress(this.data.permanentAddress)
    demoQAHomePage.clickSubmit()
    })


    it('Test CheckBox button and it tree dropdown',function(){
        demoQAHomePage.clickCheckBox()
        demoQAHomePage.clickMainDrowp()
        demoQAHomePage.clickDownloadDropdown()
        demoQAHomePage.excelBoxClick()
    })

})