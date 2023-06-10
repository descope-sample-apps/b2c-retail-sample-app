describe('Descope', function () {
  beforeEach(function () {
    cy.loginTestUser()
    cy.deleteAllTestUsers()
  })

  it('shows onboarding', function () {
    cy.contains('Get Started').should('be.visible')
  })
})