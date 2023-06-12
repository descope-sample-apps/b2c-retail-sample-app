describe('Descope', function () {
  beforeEach(function () {
    // For some reason if there are test users already created, creation of new ones fails.
    cy.deleteAllTestUsers()

    cy.loginTestUserViaAPI()
  })

  it('shows log out button in nav bar', function () {
    cy.get('.ant-modal-close-x > .anticon > svg').click(); // Close the modal
    cy.get('.main-nav .btntag > .nav-link').contains("Logout").should('be.visible');
  })
})