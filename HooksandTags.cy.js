describe('My Test Suits', ()=>{
    before(()=>{
        cy.log("****** Lunch App ********");
    })

    after(()=>{
        cy.log("******** Close App  *************")
    })

    beforeEach(()=>{
        cy.log("********* LogIN ************");
    })

    afterEach(()=>{
        cy.log("********** LogOut ***********")
    })
    
    it('Search', ()=>{

        cy.log("*******  Searching  *********");

    });

    it('Advanced Search',()=>{

        cy.log("**********  Advanced searching  ************");

    });

    it('listing Productions',()=>{

        cy.log("********* Listing Product ***********");

    });
})