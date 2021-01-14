const { createYield } = require("typescript")

describe('Conduit Cadastro', () => {
    const usuario = 'usuario' + (new Date()).getTime()
    const senha = 'senha' +(new Date()).getTime()

    it('Novo Usuário', () => {
        it('Novo Usuário', () => {
            cy.visit('/register')
            cy.get('[formcontrolname=username]').type(usuario)
            cy.get('[formcontrolname=email]').type(usuario + '@email.com')
            cy.get('[formcontrolname=password]').type(senha)
            cy.get('.btn').click()
            cy.contains('.nav-item:nth-child(4) > .nav-link', usuario)
            .should('be.visible')
        })
        it('Usuario já existe', ()=> {
            cy.visit('/register')
            cy.get('[formcontrolname=username]').type(usuario)
            cy.get('[formcontrolname=email]').type(usuario + '@email.com')
            cy.get('[formcontrolname=password]').type(senha)
            cy.get('.btn').click()
            cy.location('pathname').should('equal', '/register')
            cy.contains('error-messages > li:nth-child(1)', usuario)
            .should('not.be.empty')
        })
    })
})