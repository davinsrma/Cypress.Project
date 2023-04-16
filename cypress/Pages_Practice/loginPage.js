export class TestLogin{
    userName_loc= '#username'
    password_Loc= '#password'
    clickButton= '#submit'
  

    enterUsername(username){
        cy.get(this.userName_loc).type(username)

    }
    enterPassword(password){
        cy.get(this.password_Loc).type(password)

    }
    clickSubmit(){
        cy.get(this.clickButton).click()

    }
   
}