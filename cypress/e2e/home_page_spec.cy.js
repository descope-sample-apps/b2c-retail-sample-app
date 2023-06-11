describe('Descope', function () {
  beforeEach(function () {
    // For some reason if there are test users already created, creation of new ones fails.
    cy.deleteAllTestUsers()

    cy.loginTestUser()
    cy.deleteAllTestUsers()
  })

  it('shows logged in', function () {
    // cy.contains('Get Started').should('be.visible')
  })
})