// Click on link using label.
// over writing existing contain() command.
// re-usauable custom command.

describe('Custom Command', ()=>{
    it("handling links", ()=>{
        cy.visit('https://demo.nopcommerce.com/');
        // This is the Dirct Approch with out using customs commands
        //cy.get(':nth-child(2) > .product-item > .details > .product-title > a').click();


        // Using Customs Commands
        cy.clickLink("Apple MacBook Pro 13-inch")
        cy.get('h1').should('have.text', "APPLE MACBOOK PRO 13-inch")


    });
    it.skip("overwrite existing Command", ()=>{

        cy.visit('https://demo.nopcommerce.com/');
         // Using Customs Commands
         cy.clickLink("APPLE MACBOOK PRO 13-inch")
         cy.get('h1').should('have.text', "Apple MacBook Pro 13-inch")
 

    });
    it.only('Login command', ()=>{
        cy.visit("https://demo.nopcommerce.com/")
        
        cy.clickLink("Log in"); // custom command
        cy.loginapp("testingmail.com","test123"); // custom command
        cy.get('.ico-account').should('have.text', 'My account ')

    })
})