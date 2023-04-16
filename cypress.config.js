const { defineConfig } = require('cypress');

const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Automation_Final_Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    overwrite: false,
    json: true,
    html: false,
   

  },

  e2e: {

    watchForFileChanges:false,
    // defaultCommandTimeout:4000,

    setupNodeEvents(on, config) {
    on('task', {downloadFile}),
    require('cypress-mochawesome-reporter/plugin')(on);
     
      
      // implement node event listeners here
    },
  },
});



