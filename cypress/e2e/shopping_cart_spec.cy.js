describe('Descope', function () {
  it('Adding 4 shirts to the shopping cart and verifying price', function () {
    cy.visit("/")

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.ant-modal-close-x > .anticon > svg > path').click();
    cy.get('[style="background-color: rgb(255, 255, 255);"] > .slick-slider > .slick-list > .slick-track > [data-index="-3"] > :nth-child(1) > .product-details > .product-detail > .ant-btn > span').click();
    cy.get('.ant-badge > img').click();
    cy.get('.ant-btn-secondary').click();
    cy.get('.ant-btn-secondary').click();
    cy.get('.ant-btn-secondary').click();
    cy.get('.price').should('have.text', '$99.96');
    /* ==== End Cypress Studio ==== */
  })
})