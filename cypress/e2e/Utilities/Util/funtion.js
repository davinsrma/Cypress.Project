
// Sample of funtion which will fetch the data from response
// cy.get() it will go the locator
// then i define a variable data
// that data i am storing in value variable


cy.get('Locator Need to Add here').then((data) =>{

    let value=data.text()
})