describe('Descope', function () {
  beforeEach(function () {
    cy.deleteAllTestUsers()
    cy.loginViaDescopeAPI()
  })

  it('After log in and out, we should see the login button', function () {
    // // Now navigate to the root URL of your application.
    cy.visit('/')

    cy.get('.ant-modal-close-x > .anticon > svg').click(); // Close the modal
    cy.get('[data-cy="login-logout-button"]').click(); // Click the logout button
    cy.get('[data-cy="login-logout-button"]').contains("Login"); // Check that the login button is visible
  })
})