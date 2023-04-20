
export class DemoQAHomePage{
    
// Below are the locators of DemoQaHomePage
    element_loc=':nth-child(1) > :nth-child(1) > .card-up'
    textButton_loc=':nth-child(1) > .element-list > .menu-list > #item-0 > .text'
    fullnameTextBox_loc='#userName'
    email_loc='#userEmail'
    currentAddress_loc='#currentAddress'
    submit_loc='#submit'
    permanentAddress_loc='#permanentAddress'
    checkBox_loc=':nth-child(1) > .element-list > .menu-list > #item-1 > .text'
    mainDropDowon_loc='.rct-collapse'
    downloadDropDown_loc=':nth-child(3) > .rct-text > .rct-collapse'
    excel_loc='Excel File.doc'

// Below are the methods of DemoQaHomePage

    clickElement(){
        cy.get(this.element_loc).scrollIntoView()
        cy.get(this.element_loc).click()
    }
    
    clickTextButton(){
        cy.get(this.textButton_loc).click()
    }
    
    enterFullName(fullname){
        cy.get(this.fullnameTextBox_loc).should('be.visible').type(fullname,'{pageDown}')
    }
    
    enterEmail(mailId){
        cy.get(this.email_loc).should('be.visible').type(mailId,'{pageDown}')
    }

    entterCurrentAddress(C_Address){
        cy.get(this.currentAddress_loc).should('be.visible').type(C_Address,'{pageDown}')
    }   

    enterPermanentAddress(P_Address){
        cy.get(this.permanentAddress_loc).should('be.visible').type(P_Address,'{pageDown}')
    }
    
    clickSubmit(){
        cy.get(this.submit_loc).should('be.visible').click()
    }
    
    clickCheckBox(){
        cy.get(this.checkBox_loc).click()
    }
    
    clickMainDrowp(){
        cy.get(this.mainDropDowon_loc).click()
    }
    
    clickDownloadDropdown(){
        cy.get(this.downloadDropDown_loc).click()
    }
    
    excelBoxClick(){
        cy.contains(this.excel_loc).click()
    }



}

