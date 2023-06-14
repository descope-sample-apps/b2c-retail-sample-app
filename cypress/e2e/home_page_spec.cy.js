describe('Descope', function () {
  beforeEach(function () {
    cy.deleteAllTestUsers()
    cy.loginViaDescopeAPI()
  })

  it('After log in and out, we should see the login button', function () {
    // // Now navigate to the root URL of your application.
    cy.visit('/')

    cy.get('.ant-modal-close-x > .anticon > svg').click(); // Close the modal
    cy.get('.main-nav .btntag > .nav-link').contains("Logout").click(); // Click the logout button
    cy.get('.main-nav .btntag > .nav-link').contains("Login").should('be.visible'); // Check that the login button is visible

  })
})