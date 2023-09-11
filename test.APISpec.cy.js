


describe('Test Apis', () => {

    it('Should get the data', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1').as('getResource')

        cy.get('@getResource').then(response => {

            cy.log(response)
        })
    })


    it('Should get All the data', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').as('getAllResources')

        cy.get('@getAllResources').then(response => {

            cy.log(response)
        })
    })

    it('Should get All the data', () => {
        cy.request('POST','https://jsonplaceholder.typicode.com/posts',{
            title: 'cypress api test',
            body: 'this is the body',
            userId: 1
        }
        ).as('createResources')

        cy.get('@createResources').then(response => {

           // cy.log(response)
           expect(response.body.title).to.eql('cypress api test')
           expect(response.body.body).to.eql('this is the body')
           expect(response.body.userId).to.eql(1)
           expect(response.status).to.eql(201)
           expect(response.statusText).to.eql('Created')
        })
    })

    it('Should Update All the data', () => {
        cy.request('PUT','https://jsonplaceholder.typicode.com/posts/1',
        {
            id: 1,
            title: 'cypress has updated this title',
            body: 'cypress has updated this body for Id 1',
            userId: 100
        }).as('updateTheResource')
        cy.get('@updateTheResource').then(response => {

            expect(response.status).to.eql(200)
            expect(response.statusText).to.eql('OK')
            expect(response.body.body).to.eql('Cypress has update this body for Id 1')
        })
    })

    it('Should Update  the data', () => {
        cy.request('PATCH','https://jsonplaceholder.typicode.com/posts/1',
        {
            
            title: 'cypress has updated this title',
            
        }).as('updateTheResource')
        cy.get('@updateTheResource').then(response => {

            expect(response.body.title).to.eql('cypress has updated this Title')
            expect(response.status).to.eql(200)
            expect(response.statusText).to.eql('OK')
        })
    })

    it('Should Delete the data', () => {
        cy.request('DELETE','https://jsonplaceholder.typicode.com/posts/1',
        {
            
        }).as('deleteResource')
        cy.get('@deleteResource').then(response => {

           cy.log(response)
    })
})



})