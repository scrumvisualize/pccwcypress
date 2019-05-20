/* =====================================
Author: Vinod Mathew
Testing tool: Cypress Beta Version 3.3.0
Node version: v10.15.3
JS Editor: Visual Studio Code Editor
Operating System: Windows 10 Enterprise
Processor: Intel Core i7-7500C CPU
RAM: 16 GB
Running on test runner: Chrome 74 and Electron 61
===========================================*/

//Test to perform the Google 'Search By Image' method and validate the image received:

const someText = Cypress.env('search_text');
const image_1 = Cypress.env('image_1');
const image_2 = Cypress.env('image_2');
const image_3 = Cypress.env('image_3');

describe('Google Search By Image test', function() {
 
    before('Before test run set the viewport of the screen',()=>{
    cy.viewport(1900, 1200);
    })

    it('Verify the image searched in Google Search By Image and verify results', function() {
     cy.visit('/');
     cy.get('input[name="q"]').type(someText).type('{enter}');
     cy.wait(1000);
     cy.contains("Images").parents('#top_nav').find('div').find('div').find('div').find('div').find('div').find('div').find('div').find('div').contains("Images").click();
     cy.get('#sbtc > div > div > .FiqGxd').click();
     cy.dragFile('.drop', image_3);
     cy.scrollTo(0, 500);
     cy.get('#Z6bGOb > a').find('img').should('be.visible');
     cy.get('h3:contains("Mohanlal - Wikipedia")').invoke('text')
     .then((text)=>{
         const searchText = text;
         console.log("h3 text:"+searchText);
         expect(searchText).to.include("Mohanlal - Wikipedia");
     })
     cy.screenshot('imagesearchresults');

      Cypress.on('uncaught:exception', (err, runnable) => {
      //returning false here prevents Cypress from
      //failing the test
     return false
      })
    })

})