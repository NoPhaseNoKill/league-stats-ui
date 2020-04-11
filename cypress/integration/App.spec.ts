describe('Test App', () => {
  it('launches', () => {
    cy.visit('/');
  });

  it('finds navigation button', () => {
    cy.visit('/');
    cy.get('button').contains('Home');
  });
});
