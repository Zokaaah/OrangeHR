describe('Acessar tela de login OrangeHR', () => {
  it('login Invalido', () => {
    const InvalidUser = Cypress.env('InvalidUser')
    const InvalidPassword = Cypress.env('InvalidPassword')
    const LinkAcesso = Cypress.env('LINK')
    cy.visit(LinkAcesso)
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(InvalidUser)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(InvalidPassword)
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content > .oxd-text').should('contain','Invalid credentials')

  })
  it.only('login valido', () => {
    const username = Cypress.env('USER')
    const password = Cypress.env('password')
    const LinkAcesso = Cypress.env('LINK')
    cy.visit(LinkAcesso)
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
    cy.get('.oxd-button').click()

    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', 'Dashboard')

  })
})