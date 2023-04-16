/// <reference types="Cypress"/>

describe('This test is for file upload and file download',()=>{


it('File upload Test',function(){
    cy.visit('https://trytestingthis.netlify.app/')
    // cy.get('#myfile').attachFile('example.json')
    cy.get('#myfile').selectFile('/Users/davinder/Desktop/LinkedIn Post/3.jpg')
})

it.only('Download a file',function(){
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')

})


})