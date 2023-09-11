import 'cypress-iframe'

describe('Handling frames',()=>{

    it.skip('approch1',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        const iframe=cy.get('#mce_0_ifr').its('0.contentDocument.body').should('be.visible').then(cy.wrap);
        iframe.clear().type ('Welcome Muhammad Osama Faheem {ctrl+a}');
        cy.get('[aria-label="Bold"]').click();
        

    })

    it.skip('approch2 - by using custom command ',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.getIframe('#mce_0_ifr').clear().type('Welcome Muhammad Osama Faheem {ctrl+a}')
        cy.get('[aria-label="Bold"]').click()

    })

    it('approch3 - by using cypress -iframe plugin',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('#mce_0_ifr'); // load the frame 
        cy.iframe('#mce_0_ifr').clear().type('Yes You Can Do It, Just Belive In Your Self {ctrl.a}')
        cy.get('[aria-label="Bold"]').click()

    })

})