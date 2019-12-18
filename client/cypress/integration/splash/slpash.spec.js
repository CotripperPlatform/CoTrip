/// <reference types="Cypress" />
describe('Splash Page', ()=>{
    beforeEach(()=>{
        cy.visit('/');
    })
    describe("Header",()=>{
        it('Contains the correct text',()=>{
            cy.get('h1')
                .invoke('text')
                .should('equal', 'CoTripper')
            cy.get('p')
                .invoke('text')
                .should('equal', 'Book trips, meet moms, and experience family travel together!')
        
        })

    })
    describe("Buttons",()=>{
        it('Contains the correct text',()=>{
            cy.get('button')
                .eq(0)
                .invoke('text')
                .should('equal', 'Login')
            cy.get('button')
                .eq(0)  
                .click()
      
            cy.get('button')
                .eq(1)
                .invoke('text')
                .should('equal', 'Register')
            cy.get('button')
                .eq(1)  
                .click()
      
        
        })

    })
})