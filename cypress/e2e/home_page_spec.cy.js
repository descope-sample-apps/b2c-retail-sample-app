describe('Descope', function () {
  beforeEach(function () {
    // cy.task('db:seed')
    cy.loginTestUser(
      // Cypress.env('descope_username'),
      // Cypress.env('descope_password')
    )
    cy.deleteAllTestUsers()
  })

  it('shows onboarding', function () {
    cy.contains('Get Started').should('be.visible')
  })
})