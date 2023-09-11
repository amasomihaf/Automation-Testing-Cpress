describe('Mysuite', ()=>{
    it('Capture screenshot and videos', ()=>{
        cy.visit('https://demo.opencart.com/')
        /*cy.screenshot("Homepage");
        cy.wait(5000);
        //for specify pertical like title image logo  image you used this command
        cy.get('#logo > a > .img-fluid').screenshot("logo")
        */


       //Automatically capture ScreenShot and Video on failure - only when you excute through CLI 

       cy.get("li:nth-child(7) a:nth-child(1)").click();
       cy.get("div[id='content'] h2").should('have.text', "Tablets")
    
    })

})