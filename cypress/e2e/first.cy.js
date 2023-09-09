describe(
  'First test suite', () => {
    it(
      'First test case', () => {
        cy.visit('https://www.browserstack.com/');

        cy.get('#logo').should('be.visible');

        cy.title();
      }
    )
  }
)