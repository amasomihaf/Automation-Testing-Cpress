/// <reference types="Cypress"/>
describe('Handle Dropdowns',()=>{


    it.skip('dropdown with select', ()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country').select('Italy').should('have.value','Italy')


    })

    it.skip('dropdown with select', ()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Italy')


    })

    it.skip('Auto Suggestion Dropdown', ()=>{

        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('Delhi')
        cy.get('[href="https://en.wikipedia.org/wiki/Delhi_University"] > .suggestion-text > .suggestion-title').contains('Delhi University').click()


    })

    it('Dynamic Dropdown', ()=>{

        cy.visit("https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjC0NSGxon_AhVdgP0HHboLAeAQPAgI")
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('#APjFqb').type('cypress automation')
        cy.wait(10000)
        cy.get('#ERWdKc > .wM6W7d > span').should('have.length',1)
        cy.get('#ERWdKc > .wM6W7d > span').each(($el, index, $list)=>{
            if($el.text()=='cypress automation tutorial')
            {
                cy.wrap($el).click()
            }
        })

        cy.get('#APjFqb').should('have.value','cypress automation tutorial')

    })

})