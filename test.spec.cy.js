/// <reference types="cypress"/>
it('should login to website',() =>{
    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(8) > .oxd-main-menu-item > .oxd-text').contains('Dashboard')

    cy.contains('Invalid Credentials').should('not.exist')
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})

it('should not login to website',() =>{
    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get('.oxd-button').click()

    cy.contains('Invalid Credentials').should('not.exist')
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/auth/validateCredentials')
})