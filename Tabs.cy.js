

describe('Handel tab-approch1', ()=>{

    it.skip('Approch1',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows') // parent tab
        cy.get('.example > a').invoke('removeAttr', 'target').click(); //clicking on link
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000);
        //operations

        cy.go('back'); // back to parent tab
    })

    it('Approch2',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows') // parent tab
        cy.get('.example > a').then((uzma)=>{

            let url=uzma.prop('href');

            cy.visit(url);

            cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000);
        //operations

        cy.go('back'); // back to parent tab


        })
    })

})