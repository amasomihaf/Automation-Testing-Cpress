// go()

describe('mysuite',()=>{
    it('NavigationTest',()=>{

        cy.visit("https://demo.opencart.com/");
        cy.title().should('eq', "Your Store") // Home page
        cy.get(':nth-child(7) > .nav-link').click();
        cy.get('h2').should('have.text', "Cameras"); // Cameras

        cy.go('back');
        cy.title().should('eq',"Your Store");

        cy.go('forward'); // cameras
        cy.get('h2').should('have.text', "Cameras");

        cy.go(-1); // Home page
        cy.title().should('eq', "Your Store");

        cy.reload();
    })

})