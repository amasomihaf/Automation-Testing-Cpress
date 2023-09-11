describe('mytestsuits',()=>{

    it('DataDrivenTest',()=>{
        cy.fixture("orangehrm2").then((data)=>{

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

            data.forEach((userdata)=>{
        
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.username);
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password);
            cy.get('.oxd-button').click();

            if(userdata.username=='Admin' && userdata.password=="admin123")
            {
                cy.get(':nth-child(2) > .oxd-main-menu-item').click();
                cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', userdata.expected);
                cy.get('.oxd-userdropdown-tab > .oxd-icon').click(); // logout
                cy.get(':nth-child(4) > .oxd-userdropdown-link').click();// logout
            }
            else{
                cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("have.text", userdata.expected)
            }
            })

        })
    })
})