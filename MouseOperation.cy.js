import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')

describe('Mouse Operations', ()=>{

    it.skip('Mouse Hover',()=>{

        cy.visit("https://demo.opencart.com/")
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('not.be.visible')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('be.visible')

    });
    
    it.skip('Right Click', ()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        //approch1
        /*cy.get('.context-menu-one').trigger('contextmenu')
        //cy.get('.context-menu-icon-copy').should('be.visible');
        */

        // approch 2
        cy.get('.context-menu-one').rightclick();
        cy.get('.context-menu-icon-copy').should('be.visible');

    });

    it.skip('Double Click', ()=>{

        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.get('#accept-choices').click();
        cy.frameLoaded('#iframeResult'); // load the frame
        // approch 1 - trigger()

        cy.iframe('#iframeResult').find("button [ondblclick='myFunction()']").trigger('dblclick');
        cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World!')

    })

    it.skip('Drag and Drop using plugin', ()=>{
        cy.visit("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get('#box3').drag('#box103')
        

    });

    it.only('Scrolling Page', ()=>{

        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
        cy.get(':nth-child(2) > tbody > :nth-child(35) > :nth-child(1) > img').scrollIntoView({duration:2000})
        cy.get(':nth-child(2) > tbody > :nth-child(35) > :nth-child(1) > img').should('be.visible')

    })
})