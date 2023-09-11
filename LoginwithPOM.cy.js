import Login from "../pageObject/loginPage2"

describe('Page Object Model', ()=>{

    //General Approch 
    it('login Test', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click();
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    })

    // Using Page Object Class
    it.only('login Test', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        
        const ln=new Login();
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit();
        ln.verifyLogin();
       
    })

})