/// <reference types="Cypress" />

describe("Check UI Elements", ()=>{
    /*it("Checking Radio Buttons",()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //Visibility of Radio Button//
        cy.get(':nth-child(2) > .form-check-label').should('be.visible')
        cy.get(':nth-child(4) > .card-body > :nth-child(3)').should('be.visible')

        //Selecting the Radio Button//

        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')

    })*/
    it("Checking CheckBox Buttons",()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        //Visibility of the elements
        //cy.get(':nth-child(7) > .form-check-label').should('be.visible')
       // cy.get(':nth-child(8) > .form-check-label').should('be.visible')
       // cy.get(':nth-child(12) > .form-check-label').should('be.visible')

        //Selecting Single Check box Monday
       // cy.get('#monday').check().should('be.checked')
      // cy.get('#saturday').check().should('be.checked')

       //Unselecting Checkbox
      // cy.get("#monday").uncheck().should('not.be.checked')

       // Selecting all the check boxes
       cy.get('[type="checkbox"]').check().should('be.checked')
    })
})