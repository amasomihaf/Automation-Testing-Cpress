describe('Alert', () =>{

    //1) javascript Alert: it will have some text and an "ok" button
    it('js alert', () =>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click()
        cy.on('window:alert', (u)=>{
            expect(u).to.contains('I am a JS Alert')

        })

        //alert window automatically closed by cypress
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
        cy.screenshot()
    })
    //2) javascript Conformation alert: it will have some text with 'ok' and 'cancel' button

    it('js confirm alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click()
        cy.on('window:confirm', (u)=>{
            expect(u).to.contain('I am a JS Confirm')
        })
// cypress automatically closed alert Window by using ok button-default
cy.get('#result').should('have.text','You clicked: Ok')
cy.screenshot()    
})




// for cancel button 
    it('js confirm alert- Cancel',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click()
        cy.on('window:confirm', (u)=>{
            expect(u).to.contain('I am a JS Confirm')
        })

        cy.on('window:confirm', ()=> false) // cypress closes alert window using cancel button    
// cypress automatically closed alert Window by using ok button-default
cy.get('#result').should('have.text','You clicked: Cancel')
cy.screenshot()    
})

    //3) javascript prompt alert: it will have some text with a text box for user input along with 'Ok'
    it('js prompt alert', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((uzma)=>{
            cy.stub(uzma, 'prompt').returns('Welcome uzma')

        })
        cy.get(':nth-child(3) > button').click();

        //cypress will automatically close prompted alert-it will use ok button - by default
        cy.on('window:prompt',()=>false);
        cy.get('#result').should('have.text', 'You entered: Welcome uzma')
        cy.screenshot()
    })

    //4) Authenricated alert

    it('Authenticated alert',()=>{
        //Approch 1
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth:{username: "admin", password: "admin"}})
        cy.get('p').should('have.contain','Congratulations! You must have the proper credentials.')

        cy.screenshot()
    })
    it('Authenticated alert',()=>{
        //Approch 2
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('have.contain','Congratulations! You must have the proper credentials.')
        cy.screenshot()
    })
    cy.screenshot()
})