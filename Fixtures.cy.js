describe('Mytestsuites',()=>{

    //direct access 
    it.skip('FixtureDemoTest', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.fixture('orangehrm').then((data)=>{

            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username);
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password);
            cy.get('.oxd-button').click();
            cy.get(':nth-child(2) > .oxd-main-menu-item').click();
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', data.expected);


        })
       
    })

    //acess through hooks - for multiple it blocks
    let userdata;
    before( ()=>{
        cy.fixture("orangehrm").then((data)=>{
            userdata=data;

        })
    })
    it.only('FixtureDemoTest', ()=> {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.fixture('orangehrm').then((data)=>{

            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.username);
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password);
            cy.get('.oxd-button').click();
            cy.get(':nth-child(2) > .oxd-main-menu-item').click();
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', userdata.expected);


        })
        
        
    })
})